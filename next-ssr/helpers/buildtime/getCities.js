import axios from "axios";

export default async () => {
  const res = await axios.get(process.env.VERCEL_URL + `/api/city`);

  return res.data;
};
