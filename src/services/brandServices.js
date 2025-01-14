import { api } from "utils/api";

export const getBrands = async () => {
  try {
    const response = await api().get("/brands");
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const addBrand = async (brandName) => {
  try {
    const response = await api().post("/brands", brandName);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
