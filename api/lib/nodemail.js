const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_NAME, // Replace with your Gmail email address
    pass: process.env.MAIL_PASS, // Replace with your Gmail password or an app password for 2-Step Verification
  },
});

export const MailSender = async (email, resetLink) => {
  const mailOptions = {
    from: process.env.MAIL_NAME,
    to: email,
    subject: "Reset Password",
    html: `
      <p>Please click the following link to reset your password:</p>
      <a target="_blank" href="${process.env.PASSWORD_URL}/reset-password/${resetLink}">Reset Password</a>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    const responseParts = info.response.split(" ");
    const statusCode = responseParts[0];
    if (statusCode === "250") {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
