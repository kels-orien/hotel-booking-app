import axios from "axios";

const VERCEL_URL = process.env.VERCEL_URL;

export default async () => {
  const res = await axios.get(`http://${VERCEL_URL}/api/city`);

  return res.data;
};
