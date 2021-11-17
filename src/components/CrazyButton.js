import Message from "./Message";
import { useState } from "react";

const initialEstilo = {
  left: "80%",
  transform: "translateY(-50%) translateX(-80%)",
};
const CrazyButton = () => {
  const [estilo, setEstilo] = useState(initialEstilo);
  const [pregunta, setPregunta] = useState(true);

  const si = () => {
    setPregunta(false);
    setTimeout(() => {
      setPregunta(true);
      setEstilo(initialEstilo);
    }, 2500);
  };

  const no = () => {
    let x = Math.round(Math.random() * 90);
    let y = Math.round(Math.random() * 90);
    setEstilo({
      left: `${x}%`,
      top: `${y}%`,
    });
  };

  return (
    <div>
      <h2>My Crush</h2>
      <h5>Siéntete libre de escoger</h5>
      <h5>tu respuesta</h5>
      {pregunta ? (
        <section className="mi-crush">
          <h4>¿Quieres ser mi novia?</h4>
          <button onClick={si} className="answer" id="si">
            Si
          </button>
          <button style={estilo} onMouseMove={no} className="answer" id="no">
            No
          </button>
        </section>
      ) : (
        <Message msg="🙈 Sabía que aceptarías 🙈" bgColor="#00b33c" />
      )}
    </div>
  );
};

export default CrazyButton;
