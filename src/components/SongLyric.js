const SongLyric = ({ title, lyrics }) => {
  return (
    <section>
      <h3 style={{ textAlign: "center", fontWeight: "bold" }}>
        --- {title} ---
      </h3>
      <blockquote
        style={{
          whiteSpace: "pre-wrap",
          backgroundColor: "#c2d6d6",
          padding: "1rem",
          textAlign: "center",
        }}
      >
        {lyrics}
      </blockquote>
    </section>
  );
};

export default SongLyric;
