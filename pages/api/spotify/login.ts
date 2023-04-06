import { NextApiRequest, NextApiResponse } from "next";
import queryString from "../../../utils/queryString"


const login = async (req: NextApiRequest, res:NextApiResponse) => {
  const scope =
    `user-modify-playback-state
    user-read-playback-state
    user-read-currently-playing
    user-library-modify
    user-library-read
    user-top-read
    playlist-read-private
    playlist-modify-public`;

  try{
    res.setHeader('Access-Control-Allow-Origin', 'https://accounts.spotify.com');

    res.status(200).send({redirectURL : 'https://accounts.spotify.com/authorize?' + queryString.stringify({
      response_type: "code",
      scope,
      redirect_uri: process.env.NEXT_SPOTIFY_REDIRECT_URI,
      client_id: process.env.NEXT_SPOTIFY_CLIENT_ID
    })})
  }catch(err){
    console.log(err)
  }
}

export default login;
