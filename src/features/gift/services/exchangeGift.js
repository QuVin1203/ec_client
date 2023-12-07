import { axiosInstance, setAccessToken } from "../../../services/axios.config";
import { store } from "../../../store/store";

export const exchangeGift = async (userId, giftId) => {
  const isLoggedIn = store.getState().auth.isLogin;
  if (!isLoggedIn) {
    setAccessToken(null);
  }
  const token = store.getState().auth.currentUser.accessToken;
  setAccessToken(token);
  const res = await axiosInstance.post(
    `user/exchange?userId=${userId}&giftId=${giftId}`
  );
  return res.data;
};
