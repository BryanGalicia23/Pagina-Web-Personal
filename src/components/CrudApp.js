import React, { useState } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";

const initialDb = [
  {
    id: 1,
    name: "Monkey D. Luffy",
    fruit: "Gomu Gomu no mi",
  },
  {
    id: 2,
    name: "Trafalgar D. Law",
    fruit: "Ope Ope no mi",
  },
  {
    id: 3,
    name: "Portgas D. Ace",
    fruit: "Mera Mera no mi",
  },
  {
    id: 4,
    name: "Edward Newgate",
    fruit: "Gura Gura no mi",
  },
  {
    id: 5,
    name: "Charlotte Linlin",
    fruit: "Soru Soru no mi",
  },
];

const CrudApp = () => {
  const [db, setDb] = useState(initialDb);
  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (data) => {
    data.id = Date.now();
    setDb([...db, data]);
  };

  const updateData = (data) => {
    let newData = db.map((el) => (el.id === data.id ? data : el));
    setDb(newData);
  };

  const deleteData = (id, name) => {
    let isDelete = window.confirm(`¿Deseas eliminar a ${name}?`);

    if (isDelete) {
      let newData = db.filter((el) => el.id !== id);
      setDb(newData);
    } else {
      return;
    }
  };

  return (
    <div>
      <h2>CRUD App</h2>
      <article>
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
        <CrudTable
          data={db}
          setDataToEdit={setDataToEdit}
          deleteData={deleteData}
        />
      </article>
    </div>
  );
};

export default CrudApp;
