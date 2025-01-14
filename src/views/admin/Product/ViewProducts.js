import ItemColumn from "components/ItemTiles/ItemColumn";
import ItemTile from "components/ItemTiles/ItemTile";
import { useProductContext } from "providers/ProductProvider";

const ViewProducts = () => {
  const allProducts = useProductContext().products;
  const color = "light";
  return (
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
      <div className="rounded-t bg-white mb-0 px-6 py-4">
        <h6 className="text-blueGray-700 text-xl font-bold">
          View All Products
        </h6>
        <table className="w-full">
          <thead>
            <tr
              className={
                "w-full" + color === "light"
                  ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                  : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700"
              }
            >
              <ItemColumn color={color} columnName="_id" />
              <ItemColumn color={color} columnName="name" />
              <ItemColumn color={color} columnName="stock" />
              <ItemColumn color={color} columnName="" />
            </tr>
          </thead>
          <tbody>
            <ItemTile />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewProducts;
