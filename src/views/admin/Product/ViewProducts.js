import { useProductContext } from "providers/ProductProvider";

const ViewProducts = () => {
  const allProducts = useProductContext().products;
  return (
    <div className="flex flex-wrap relative">
      <div className="w-full px-4">
        <div className="relative  bg-white w-full shadow-lg rounded">
          <div className="px-6 py-6">
            <h1 className="font-bold text-lg text-gray-800">
              View all Product
            </h1>
            {allProducts.map((product) => (
              <p key={product._id}>{product.name}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProducts;
