const express = require("express");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const cors = require("cors");
const Stripe = require("stripe");
const sendMail = require("../mailer");
const router = express.Router();

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

// Middleware
router.use(helmet());
router.use(
  cors({
    origin: process.env.ALLOWED_ORIGIN,
    credentials: true,
  })
);

if (!process.env.ALLOWED_ORIGIN) {
  console.warn("⚠️  Kein ALLOWED_ORIGIN gesetzt!");
}

const formLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1h
  max: 10,
  message: "Zu viele Anfragen – bitte später erneut versuchen.",
  standardHeaders: true,
  legacyHeaders: false,
  keyGenerator: (req) => req.ip,
});

const currentDate = new Date().toLocaleDateString("de-DE", {
  timeZone: "Europe/Berlin",
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
});

router.use(formLimiter);

router.post(
  "/stripe/webhook",
  express.raw({ type: "application/json" }),
  async (req, res) => {
    console.log("req", req);
    const sig = req.headers["stripe-signature"];
    const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

    let event;

    try {
      event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
    } catch (err) {
      console.error("Webhook-Fehler:", err.message);
      return res.status(400).send(`Webhook error: ${err.message}`);
    }

    if (event.type === "checkout.session.completed") {
      const session = event.data.object;

      const addressLine1 = session.metadata.addressLine1;
      const city = session.metadata.city;
      const country = session.metadata.country;
      const customer_email = session.customer_details?.email;
      const customer_phone = session.customer_details?.phone;
      const customer_name = session.customer_details?.name;

      const currentDate = new Date().toLocaleDateString("de-DE");

      const htmlForOwner = `
        <!DOCTYPE html>
        <html lang="de">
          <head>
            <meta charset="UTF-8">
            <title>Standortanalyse Anfrage</title>
          </head>
          <body>
            <p>Hallo Timothy,</p>
            <p>
              ${customer_name} hat eine Standortanalyse angefordert!
            </p>
            <p>Im Folgenden einmal die Details:</p>
            <ul>
              <li>Kunde: ${customer_name}</li>
              <li>Straße: ${addressLine1}, Stadt: ${city}, Land: ${country}</li>
              <li>Datum: ${currentDate}</li>
              <li>E-Mail: ${customer_email}</li>
              <li>Telefon: ${customer_phone}</li>
            </ul>
            <p>Viel Spaß bei der Analyse! :)</p>
            <p>
              Liebe Grüße<br>
              Dein HELLO TRAFFIC Bot
            </p>
          </body>
        </html>
      `;

      const htmlCustomer = `
        <!DOCTYPE html>
        <html lang="de">
          <head>
            <meta charset="UTF-8">
            <title>Standortanalyse Anfrage</title>
          </head>
          <body>
            <p>Hallo ${customer_name},</p>
            <p>
              Sie haben erfolgreich eine Standortanalyse angefordert!
            </p>

            <p>Wir melden uns zeitnah mit weiteren Details :)</p>
            <p>
              Liebe Grüße<br>
              Dein HELLO TRAFFIC Bot
            </p>
            <center style="width:100%; background-color:#fff;">
              <!--[if mso]>
                <table role="presentation" width="600" align="center" cellpadding="0" cellspacing="0" border="0">
                  <tr><td>
              <![endif]-->

              <table
                role="presentation"
                cellpadding="0"
                cellspacing="0"
                border="0"
                width="100%"
                style="max-width:600px; font-family:Arial, sans-serif; font-size:14px; color:#333;"
              >
                <tr>
                  <td width="33%" align="center" valign="top" style="padding:10px;">
                    <img src="cid:ceo" alt="Timothy Keller" width="100" style="display:block; border-radius:50%;" />
                  </td>
                  <td width="34%" align="left" valign="top" style="padding:10px; line-height:1.4; text-align:left;">
                    <strong>Timothy Keller</strong><br>
                    Geschäftsführer<br><br>
                    <div style="font-size:13px; line-height:1.3; text-align:left; max-width:160px; margin:0;">
                      <img src="cid:phone" alt="" width="14" style="display:inline-block; vertical-align:middle;" />
                      &nbsp;0152 33694 184 | 04921-9299815<br>
                      <img src="cid:email" alt="" width="14" style="display:inline-block; vertical-align:middle;" />
                      &nbsp;<a href="mailto:timothy.keller@hello-expansion.de" style="color:#333; text-decoration:none;">timothy.keller@hello-expansion.de</a><br>
                      <img src="cid:location" alt="" width="14" style="display:inline-block; vertical-align:middle;" />
                      &nbsp;Steinweg 8 – 26721 Emden
                    </div>
                  </td>
                  <td width="33%" align="center" valign="top" style="padding:10px;">
                    <img src="cid:firmenlogo" alt="Firmenlogo" width="100" style="display:block;" />
                  </td>
                </tr>
              </table>

              <!--[if mso]>
                  </td></tr>
                </table>
              <![endif]-->
            </center>
          </body>
        </html>
      `;

      try {
        await sendMail(htmlForOwner, process.env.EMAIL_TO);
        await sendMail(htmlCustomer, customer_email);
      } catch (error) {
        console.error("Fehler beim Mailversand:", error);
      }
    }

    res.json({ received: true });
  }
);

router.use(express.json());

router.post("/create-checkout-session", async (req, res) => {
  const { addressData } = req.body;

  if (!addressData) {
    return res.status(400).send({ error: "Fehlende Adressdaten" });
  }

  const { addressLine1, city, country } = addressData;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: "Standortanalyse",
            },
            unit_amount: 19900, // 199,00 €
          },
          quantity: 1,
        },
      ],
      phone_number_collection: {
        enabled: true,
      },
      success_url: `${process.env.CLIENT_URL}/paymentSuccess`,
      cancel_url: `${process.env.CLIENT_URL}/`,
      metadata: {
        addressLine1,
        city,
        country,
      },
    });

    res.send({ sessionId: session.id });
  } catch (error) {
    console.error("Stripe Fehler:", error);
    res.status(500).send({ error: "Zahlung konnte nicht erstellt werden." });
  }
});

router.post("/sendFormMail", formLimiter, async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Alle Felder sind erforderlich" });
  }

  try {
    const htmlForOwner = `
      <!DOCTYPE html>
      <html lang="de">
      <head>
        <meta charset="UTF-8">
        <title>Neue Nachricht von HELLO TRAFFIC</title>
      </head>
      <body>
        <p>Hallo Timothy,</p>
        <p>
          du hast eine neue Nachricht über die Webseite von HELLO TRAFFIC erhalten!
        </p>
        <ul>
          <li>Name: ${name}</li>
          <li>E-Mail: ${email}</li>
          <li>Message: ${message}</li>
          <li>Datum: ${currentDate}</li>
        </ul>
        <p>Die Person freut sich schon auf deine Antwort!</p>
        <p>
          Liebe Grüße<br>
          Dein HELLO TRAFFIC Bot
        </p>
        <center style="width:100%; background-color:#fff;">
          <!--[if mso]>
            <table role="presentation" width="600" align="center" cellpadding="0" cellspacing="0" border="0">
              <tr><td>
          <![endif]-->
    
          <table
            role="presentation"
            cellpadding="0"
            cellspacing="0"
            border="0"
            width="100%"
            style="max-width:600px; font-family:Arial, sans-serif; font-size:14px; color:#333;"
          >
            <tr>
              <td width="33%" align="center" valign="top" style="padding:10px;">
                <img src="cid:ceo" alt="Timothy Keller" width="100" style="display:block; border-radius:50%;" />
              </td>
              <td width="34%" align="left" valign="top" style="padding:10px; line-height:1.4; text-align:left;">
                <strong>Timothy Keller</strong><br>
                Geschäftsführer<br><br>
                <div style="font-size:13px; line-height:1.3; text-align:left; max-width:160px; margin:0;">
                  <img src="cid:phone" alt="" width="14" style="display:inline-block; vertical-align:middle;" />
                  &nbsp;0152 33694 184 | 04921-9299815<br>
                  <img src="cid:email" alt="" width="14" style="display:inline-block; vertical-align:middle;" />
                  &nbsp;<a href="mailto:timothy.keller@hello-expansion.de" style="color:#333; text-decoration:none;">timothy.keller@hello-expansion.de</a><br>
                  <img src="cid:location" alt="" width="14" style="display:inline-block; vertical-align:middle;" />
                  &nbsp;Steinweg 8 – 26721 Emden
                </div>
              </td>
              <td width="33%" align="center" valign="top" style="padding:10px;">
                <img src="cid:firmenlogo" alt="Firmenlogo" width="100" style="display:block;" />
              </td>
            </tr>
          </table>
    
          <!--[if mso]>
              </td></tr>
            </table>
          <![endif]-->
        </center>
      </body>
      </html>
      `;

    const htmlCustomer = `
      <!DOCTYPE html>
      <html lang="de">
        <head>
          <meta charset="UTF-8">
          <title>Standortanalyse Anfrage</title>
        </head>
        <body>
          <p>Hallo ${name},</p>
          <p>
            Sie haben erfolgreich das Formular abgesendet!
          </p>
          <p>Wir melden uns zeitnah mit weiteren Details :)</p>
          <p>
            Liebe Grüße<br>
            Dein HELLO TRAFFIC Bot
          </p>
          <center style="width:100%; background-color:#fff;">
            <!--[if mso]>
              <table role="presentation" width="600" align="center" cellpadding="0" cellspacing="0" border="0">
                <tr><td>
            <![endif]-->
      
            <table
              role="presentation"
              cellpadding="0"
              cellspacing="0"
              border="0"
              width="100%"
              style="max-width:600px; font-family:Arial, sans-serif; font-size:14px; color:#333;"
            >
              <tr>
                <td width="33%" align="center" valign="top" style="padding:10px;">
                  <img src="cid:ceo" alt="Timothy Keller" width="100" style="display:block; border-radius:50%;" />
                </td>
                <td width="34%" align="left" valign="top" style="padding:10px; line-height:1.4; text-align:left;">
                  <strong>Timothy Keller</strong><br>
                  Geschäftsführer<br><br>
                  <div style="font-size:13px; line-height:1.3; text-align:left; max-width:160px; margin:0;">
                    <img src="cid:phone" alt="" width="14" style="display:inline-block; vertical-align:middle;" />
                    &nbsp;0152 33694 184 | 04921-9299815<br>
                    <img src="cid:email" alt="" width="14" style="display:inline-block; vertical-align:middle;" />
                    &nbsp;<a href="mailto:timothy.keller@hello-expansion.de" style="color:#333; text-decoration:none;">timothy.keller@hello-expansion.de</a><br>
                    <img src="cid:location" alt="" width="14" style="display:inline-block; vertical-align:middle;" />
                    &nbsp;Steinweg 8 – 26721 Emden
                  </div>
                </td>
                <td width="33%" align="center" valign="top" style="padding:10px;">
                  <img src="cid:firmenlogo" alt="Firmenlogo" width="100" style="display:block;" />
                </td>
              </tr>
            </table>
      
            <!--[if mso]>
                </td></tr>
              </table>
            <![endif]-->
          </center>
        </body>
      </html>
      `;
    await sendMail(htmlForOwner, `${process.env.EMAIL_TO}`);
    await sendMail(htmlCustomer, `${email}`);

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Fehler beim Mailversand:", error);
    res.status(500).json({ error: "Mail konnte nicht gesendet werden" });
  }
});

module.exports = router;
