import React from "react";

const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {
  const { name, fruit, id } = el;

  return (
    <tr>
      <td>{name}</td>
      <td>{fruit}</td>
      <td>
        <button onClick={() => setDataToEdit(el)}>✏</button>
        <button onClick={() => deleteData(id, name)}>🗑</button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
