const ItemTile = () => {
  const color = "light";
  return (
    <tr>
      <td className="px-6  text-xs whitespace-nowrap p-4 font-bold">12334</td>
      <td className="border-t-0 px-6 items-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        Nike Air max
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        12
      </td>

      <th
        className={
          "px-6   py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-right" +
          (color === "light"
            ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
            : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
        }
      >
        <button className="bg-emerald-500 text-white px-4 py-2 rounded mr-4">
          Edit
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded">
          Delete
        </button>
      </th>
    </tr>
  );
};

export default ItemTile;
