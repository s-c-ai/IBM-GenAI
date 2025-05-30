import { redirect, type RequestHandler } from "@sveltejs/kit";
import { OAuth2Client } from "google-auth-library";
import {
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_WRENAI,
  REDIRECT_OAUTH,
} from "$env/static/private";

export const GET: RequestHandler = async ({ url }) => {
  const code = url.searchParams.get("code");
  const oAuth2Client = new OAuth2Client(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_OAUTH,
  );

  if (code) {
    try {
      const response = await oAuth2Client.getToken(code);
      oAuth2Client.setCredentials(response.tokens);
    } catch (err) {
      return new Response(`Something went wrong: ${err}`, { status: 500 });
    }
  }

  const user = oAuth2Client.credentials;

  if (!user) {
    console.log("Error while trying to get user");
    return new Response("User not found", { status: 400 });
  }

  throw redirect(303, REDIRECT_WRENAI);
};
