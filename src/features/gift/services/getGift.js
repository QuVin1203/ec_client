import axios from "axios";

export const getList = async () => {
  const res = await axios.get("http://localhost:8000/api/gift/");
  return res.data;
};
