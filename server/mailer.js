const nodemailer = require("nodemailer");
const { mailFooterAttachments } = require("./mailfooter");
require("dotenv").config();

module.exports = async function sendMail(
  html,
  emailTo,
  subject = "Neue Nachricht vom von HELLO TRAFFIC"
) {
  const transporter = nodemailer.createTransport({
    service: "gmail", // https://all-inkl.com/ --> SMTP Host von all-inkl
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const info = await transporter.sendMail({
    from: `${process.env.EMAIL_USER}`,
    to: `${emailTo}`,
    subject: `${subject}`,
    html: html,
    attachments: mailFooterAttachments,
  });

  console.log("E-Mail gesendet:", info.messageId);
};
