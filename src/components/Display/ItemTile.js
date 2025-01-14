const ItemTile = ({ item }) => {
  delete item.__v;
  const values = Object.values(item);
  values.splice(10);
  return (
    <tr>
      {values.map((value, index) => {
        const val =
          value && typeof value === "object"
            ? value.name
            : value !== null && value !== undefined
            ? value
            : "N/A";

        return (
          <td key={index} className="px-6 text-xs p-4 ">
            {String(val)}
          </td>
        );
      })}
      <td className="relative">
        <i className="fas fa-ellipsis-v text-lightBlue-600 cursor-pointer"></i>
      </td>
    </tr>
  );
};

export default ItemTile;
