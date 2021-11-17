import React, { useState } from "react";
import NotesForm from "./NotesForm";
import NotesTable from "./NotesTable";

const initialDb = [];

const NotesApp = () => {
  const [db, setDb] = useState(initialDb);
  const [dataToEdit, setDataToEdit] = useState(null);

  const createNote = (data) => {
    data.id = Date.now();
    setDb([...db, data]);
  };

  const updateNote = (data) => {
    let newData = db.map((el) => (el.id === data.id ? data : el));
    setDb(newData);
  };

  const deleteNote = (id) => {
    const isDelete = window.confirm("¿Desea eliminar la nota?");

    if (isDelete) {
      let newData = db.filter((el) => el.id !== id);
      setDb(newData);
    } else {
      return;
    }
  };

  return (
    <div>
      <h2>App Notas</h2>
      <NotesForm
        createNote={createNote}
        updateNote={updateNote}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
      />
      <article className="box">
        <NotesTable
          data={db}
          setDataToEdit={setDataToEdit}
          deleteNote={deleteNote}
        />
      </article>
    </div>
  );
};

export default NotesApp;
