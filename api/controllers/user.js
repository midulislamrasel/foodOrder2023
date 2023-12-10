const { MailSender } = require("../lib/nodemail");

const mailsent = await MailSender(user.email, resetLink);
if (mailsent) {
  return NextResponse.json(
    { message: "Verification mail sent successfully" },
    { status: 200 }
  );
}