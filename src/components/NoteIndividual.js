const NoteIndividual = ({ el, setDataToEdit, deleteNote }) => {
  const { id, text } = el;
  let color1 = Math.round(Math.random() * 999999);

  return (
    <div className="grid-responsive">
      <div
        style={{
          border: "thin solid gray",
          borderRadius: "1rem",
          padding: "0.5rem",
          backgroundColor: `#${color1}60`,
        }}
      >
        <button onClick={() => setDataToEdit(el)}>✏</button>
        <button onClick={() => deleteNote(id)}>🗑</button>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default NoteIndividual;
