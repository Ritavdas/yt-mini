import axios from "axios";

const KEY = "AIzaSyAgL32GVN1X0aUQyXDStfhlMI_ws7G_rjs";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
