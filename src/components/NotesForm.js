import React, { useState, useEffect } from "react";

const initialForm = {
  id: null,
  text: "",
};

const NotesForm = ({ createNote, updateNote, dataToEdit, setDataToEdit }) => {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
  }, [dataToEdit]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.text) {
      alert("No has agregado ninguna nota");
      return;
    }

    if (form.id === null) {
      createNote(form);
    } else {
      updateNote(form);
    }

    handleReset();
  };

  const handleReset = (e) => {
    setForm(initialForm);
    setDataToEdit(null);
  };

  return (
    <div>
      <h4>{dataToEdit ? "Editar" : "Agregar"}</h4>
      <form onSubmit={handleSubmit}>
        <textarea
          style={{ backgroundColor: "#ffff99" }}
          name="text"
          placeholder="Agrega tu nota"
          cols="20"
          rows="5"
          onChange={handleChange}
          value={form.text}
        ></textarea>
        <input type="submit" value="Agregar" />
        <input type="reset" value="Limpiar" onClick={handleReset} />
      </form>
    </div>
  );
};

export default NotesForm;
