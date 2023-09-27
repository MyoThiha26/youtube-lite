import axios from "axios";
import { RootObject as RootVideo } from "../types/videoTypes";
import { RootObject as RootChannel } from "../types/channelTypes";
import { RootObject as RootVideoDetail } from "../types/videoDetailTypes";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  method: "GET",
  params: {
    regionCode: "US",
    maxResults: "50",
    order: "date",
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY as string,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromApi = async (url: string) => {
  const response = await axios.get(`${BASE_URL}/${url}`, options);
  const data: RootVideo | RootChannel | RootVideoDetail = await response.data;
  return data;
};
