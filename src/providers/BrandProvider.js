import { addBrand, getBrands } from "services/brandServices";

const { createContext, useContext, useState } = require("react");

const BrandContext = createContext(null);

const BrandProvider = ({ children }) => {
  const [brands, setBrands] = useState([]);

  const getAllBrands = async () => {
    const result = await getBrands();
    setBrands(result);
  };
  const addNewBrand = async (brandName) => {
    const data = {
      name: brandName,
    };
    setBrands((prev) => [...prev, data]);
    const result = await addBrand(data);
    return result;
  };

  return (
    <BrandContext.Provider value={{ getAllBrands, addNewBrand, brands }}>
      {children}
    </BrandContext.Provider>
  );
};

export default BrandProvider;

export function useBrandContext() {
  const context = useContext(BrandContext);
  if (!context) {
    throw new Error("useBrandContext must be used within a BrandProvider");
  }
  return context;
}
