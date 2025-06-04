const path = require("path");

const mailFooterHtml = `
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
      <td width="34%" align="center" valign="top" style="padding:10px; line-height:1.4;">
        <strong>Timothy Keller</strong><br />
        Geschäftsführer<br /><br />
        <div style="font-size:13px; line-height:1.3; text-align:left; max-width:160px; margin:0 auto;">
          <img src="cid:phone" alt="" width="14" style="display:inline-block; vertical-align:middle;" />
          &nbsp;0152 33694 184 | 04921-9299815<br />
          <img src="cid:email" alt="" width="14" style="display:inline-block; vertical-align:middle;" />
          &nbsp;<a href="mailto:timothy.keller@hello-expansion.de" style="color:#333; text-decoration:none;">timothy.keller@hello-expansion.de</a><br />
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
`;

const mailFooterAttachments = [
  {
    filename: "geschaeftsfuehrer.jpg",
    path: path.join(__dirname, "assets/images/ceo.jpeg"),
    cid: "ceo",
  },
  {
    filename: "phone.svg",
    path: path.join(__dirname, "assets/logos/phone.svg"),
    cid: "phone",
  },
  {
    filename: "email.svg",
    path: path.join(__dirname, "assets/logos/email.svg"),
    cid: "email",
  },
  {
    filename: "location.svg",
    path: path.join(__dirname, "assets/logos/location.svg"),
    cid: "location",
  },
  {
    filename: "firmenlogo.png",
    path: path.join(__dirname, "assets/images/firmenlogo.png"),
    cid: "firmenlogo",
  },
];

module.exports = { mailFooterHtml, mailFooterAttachments };
