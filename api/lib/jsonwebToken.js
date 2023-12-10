const jwt = require("jsonwebtoken");
export function generateResetToken(userid) {
  const Token = jwt.sign({ userId: userid }, process.env.RESET_TOKEN_SECRET, {
    expiresIn: "15m",
  });
  return Token;
}
