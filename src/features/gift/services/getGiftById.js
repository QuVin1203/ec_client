import { axiosInstance } from "../../../services/axios.config";

export const getGiftById = async (id) => {
  const res = await axiosInstance.get(`gift/detail/${id}`);
  return res.data;
};
