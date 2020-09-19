import axios from "axios";

export default async () => {
  const res = await axios.get(`VERCEL_URL` + `/api/city`);

  return res.data;
};
