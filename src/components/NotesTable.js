import React from "react";
import NoteIndividual from "./NoteIndividual";

const NotesTable = ({ data, setDataToEdit, deleteNote }) => {
  return (
    <div className="grid-responsive">
      {data.length === 0 ? (
        <h5>Sin notas</h5>
      ) : (
        data.map((el) => (
          <NoteIndividual
            key={el.id}
            el={el}
            setDataToEdit={setDataToEdit}
            deleteNote={deleteNote}
          />
        ))
      )}
    </div>
  );
};

export default NotesTable;
