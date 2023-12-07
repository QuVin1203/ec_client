import { axiosInstance } from "../../../services/axios.config";

export const history = async (id) => {
  const res = await axiosInstance.get(`/gift/user/${id}`);
  return res.data;
};
