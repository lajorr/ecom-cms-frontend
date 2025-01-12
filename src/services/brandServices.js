import { api } from "utils/api";

export const getBrands = async () => {
  const response = await api().get("/brands");
  return response.data;
};

export const addBrand = async (brandName) => {
  try {
    const response = await api().post("/brands", brandName);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
