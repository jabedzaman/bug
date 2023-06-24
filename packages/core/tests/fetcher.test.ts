import Spotify from "../dist/fetcher";
import { describe, expect, test, jest } from "@jest/globals";
import "dotenv/config";


const spotify = new Spotify({
    clientId: process.env.SPOTIFY_CLIENT_ID as string,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET as string,
  });

describe("Spotify API", () => {
  jest.setTimeout(99999);
  test("should return correct display name", async () => {
    const user = await spotify.getSpotifyUser("317diaaofhsu4cnalsyvhlp7s2oa");
    //   @ts-ignore
    expect(user.body.display_name).toEqual("xense 🦦");
  });
});
