const { createContext, useContext, useState } = require("react");
const { addCategory } = require("services/categoryServices");
const { getCategories } = require("services/categoryServices");

const CategoryContext = createContext(null);

const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  const getAllCategories = async () => {
    const result = await getCategories();
    setCategories(result);
  };

  const addNewCategory = async (catName) => {
    const data = {
      name: catName,
    };
    setCategories((prev) => [...prev, data]);
    const result = await addCategory(data);
    return result;
  };

  return (
    <CategoryContext.Provider
      value={{ getAllCategories, addNewCategory, categories }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;

export function useCategoryContext() {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error(
      "useCategoryContext must be used within a CategoryProvider"
    );
  }
  return context;
}
