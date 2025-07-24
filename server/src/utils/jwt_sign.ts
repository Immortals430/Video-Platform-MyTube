import jwt from "jsonwebtoken";
const jwtSecret = process.env.JWT_SECRET || "xyz";

interface Payload {
  id: string;
  email: string;
}

export const generateJwtToken = (payload: Payload) => {
  return jwt.sign(payload, jwtSecret, { expiresIn: "2 days" });
};
