import { createContext, useContext, useState } from "react";
import { addProduct, getProducts } from "services/productService";

const productContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const addNewProduct = async (data) => {
    setProducts((prev) => [...prev, result]);
    const result = await addProduct(data);
    return result;
  };

  const getAllProducts = async () => {
    const result = await getProducts();
    setProducts(result);
    return result;
  };

  return (
    <productContext.Provider
      value={{ addNewProduct, getAllProducts, products }}
    >
      {children}
    </productContext.Provider>
  );
};

export default ProductProvider;

export function useProductContext() {
  const ctx = useContext(productContext);
  if (!ctx) {
    throw new Error("useProductContext must be used within a ProductProvider");
  }
  return ctx;
}
