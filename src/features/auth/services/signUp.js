import axios from "axios";

export const signUp = async (registerData) => {
  const res = await axios.post(
    "http://localhost:8000/api/auth/register",
    registerData
  );
  return res.data;
};
