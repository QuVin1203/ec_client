import { axiosInstance, setAccessToken } from "../../../services/axios.config";
import { store } from "../../../store/store";

export const getUser = async () => {
  const isLoggedIn = store.getState().auth.isLogin;
  if (!isLoggedIn) {
    setAccessToken(null);
  }
  const token = store.getState().auth.currentUser.accessToken;
  setAccessToken(token);
  const res = await axiosInstance.get("/user");
  return res.data;
};
