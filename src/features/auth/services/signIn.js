import axios from "axios";

export const signIn = async (loginData) => {
  const res = await axios.post(
    "http://localhost:8000/api/auth/login",
    loginData
  );
  return res.data;
};
