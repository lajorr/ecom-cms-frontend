import { api } from "utils/api";

export const getProducts = async () => {
  const response = await api().get("/products");
  return response.data;
};

export const addProduct = async (product) => {
  try {
    const response = await api().post("/products", product);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
