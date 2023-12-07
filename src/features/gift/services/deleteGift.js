import { axiosInstance, setAccessToken } from "../../../services/axios.config";
import { store } from "../../../store/store";
export const deleteGift = async (id) => {
  const isLoggedIn = store.getState().auth.isLogin;
  if (!isLoggedIn) {
    setAccessToken(null);
  }
  const token = store.getState().auth.currentUser.accessToken;
  setAccessToken(token);
  const res = await axiosInstance.delete(`gift/${id}`);
  return res.data;
};
