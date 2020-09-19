import axios from "axios";

export default async () => {
  const res = await axios.get(process.env.WEB_URL + `/api/city`);

  return res.data;
};
