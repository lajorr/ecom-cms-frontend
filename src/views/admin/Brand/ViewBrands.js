import { useBrandContext } from "providers/BrandProvider";

const ViewBrands = () => {
  const allBrands = useBrandContext().brands;

  return (
    <div className="flex flex-wrap relative">
      <div className="w-full px-4">
        <div className="relative  bg-white w-full shadow-lg rounded">
          <div className="px-6 py-6">
            <h1 className="font-bold text-lg text-gray-800">View all Brand</h1>
            {allBrands.map((brand) => (
              <p key={brand._id}>{brand.name}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewBrands;
