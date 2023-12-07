import { store } from "../../../store/store";
import { axiosInstance, setAccessToken } from "../../../services/axios.config";

export const createGift = async (giftData) => {
  const isLoggedIn = store.getState().auth.isLogin;
  if (!isLoggedIn) {
    setAccessToken(null);
  }
  const token = store.getState().auth.currentUser.accessToken;
  setAccessToken(token);
  const res = await axiosInstance.post("/gift", giftData);
  return res.data;
};
