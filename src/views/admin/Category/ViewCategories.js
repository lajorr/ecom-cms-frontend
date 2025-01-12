import { useCategoryContext } from "providers/CategoryProvider";

const ViewCategories = () => {
  const getAllCategories = useCategoryContext().categories;

  return (
    <div className="flex flex-wrap relative">
      <div className="w-full px-4">
        <div className="relative  bg-white w-full shadow-lg rounded">
          <div className="px-6 py-6">
            <h1 className="font-bold text-lg text-gray-800">
              View all categories
            </h1>
            {getAllCategories.map((category) => (
              <p key={category._id}>{category.name}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCategories;
