import { api } from "utils/api";

export const getCategories = async () => {
  const response = await api().get("/categories");
  return response.data;
};

export const addCategory = async (catName) => {
  try {
    const response = await api().post("/categories", catName);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
