import { productInputFields } from "components/Forms/formConstants";
import MyInputField from "components/Forms/MyInputField";

const AddProduct = () => {
  const dummyBrands = [
    { id: 1, name: "Brand 1" },
    { id: 2, name: "Brand 2" },
  ];

  return (
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
      <div className="rounded-t bg-white mb-0 px-6 py-6">
        <div className="text-center flex justify-between">
          <h6 className="text-blueGray-700 text-xl font-bold">Add Product</h6>
          <button
            className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
            type="button"
          >
            Add
          </button>
        </div>
      </div>
      <div className="px-4 lg:px-10 py-10 pt-0">
        <form>
          <h6 className="text-blueGray-400 text-sm mt-3  font-bold uppercase">
            Product Information
          </h6>
          <div className="flex flex-wrap">
            {productInputFields.map((field) => (
              <MyInputField
                key={field.id}
                title={field.title}
                type={field.type}
                placeholder={field.placeholder}
                name={field.name}
              />
            ))}
          </div>

          <div className="flex justify-between mt-4">
            <div className="flex items-center">
              <label className=" uppercase text-blueGray-600 text-xs font-bold mr-4 ">
                Featured
              </label>
              <input
                type="Checkbox"
                className=" py-2 px-2  placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-2 ease-linear transition-all duration-150"
              />
            </div>
            <div className="">
              <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                Brand
              </label>
              <select
                className=" py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow"
                style={{ width: "200px" }}
              >
                {dummyBrands.map((brand) => (
                  <option>{brand.name}</option>
                ))}
              </select>
            </div>
            <div className=" w-4 mb-3">
              <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                Category
              </label>
              <select
                className=" py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow "
                style={{ width: "200px" }}
              >
                <option>2</option>
                <option>1asdasdsaasdasdasdasd</option>
                <option>3</option>
              </select>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
