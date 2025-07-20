import { NextFunction, Request, Response } from "express";
import { google } from "googleapis";
const people = google.people("v1");

async function verifyToken(req: Request, res: Response, next: NextFunction) {
  const token = req.headers["authorization"];

  try {
    const oauth2Client = new google.auth.OAuth2();
    oauth2Client.setCredentials({ access_token: token });

    const { data } = await people.people.get({
      resourceName: "people/me",
      personFields: "names,emailAddresses",
      auth: oauth2Client,
    });

    req.user = {
      username: data.names?.[0]?.displayName,
      email: data.emailAddresses?.[0]?.value,
    };
    next();
  } catch (err) {
    console.log(err);
    next(err);
  }
}

export default verifyToken;
