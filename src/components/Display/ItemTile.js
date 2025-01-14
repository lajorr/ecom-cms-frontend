const ItemTile = ({ item }) => {
  delete item.__v;
  const values = Object.values(item);
  values.splice(10);
  return (
    <tr>
      {values.map((value) => (
        <td key={value} className="px-6 text-xs p-4 ">
          {String(value)}
        </td>
      ))}
      <td className="relative">
        <i className="fas fa-ellipsis-v text-lightBlue-600 cursor-pointer"></i>
      </td>
      {/* <th
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
      </th> */}
    </tr>
  );
};

export default ItemTile;
