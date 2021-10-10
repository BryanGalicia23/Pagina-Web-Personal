const FormatCv = () => {
  return (
    <div style={{ position: "absolute", width: "100%", height: "100%" }}>
      <object
        data={require("../docs/BryanGalicia.pdf")}
        type="application/pdf"
        width="100%"
        height="100%"
      >
        CV
      </object>
    </div>
  );
};

export default FormatCv;
