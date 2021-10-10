const SongArtist = ({ artist }) => {
  return (
    <section>
      <h3 style={{ textAlign: "center", fontWeight: "bold" }}>
        {artist.strArtist}
      </h3>
      <img
        style={{
          width: "300px",
          height: "300px",
          display: "block",
          margin: "auto",
        }}
        src={artist.strArtistThumb}
        alt={artist.strArtist}
      />
      <p style={{ textAlign: "center" }}>
        {artist.intBornYear} - {artist.intDiedYear || "Presente"}
      </p>
      <p style={{ textAlign: "center" }}>{artist.strCountry}</p>
      <p style={{ textAlign: "center" }}>
        {artist.strGenre} - {artist.strStyle}
      </p>
      <p
        style={{
          whiteSpace: "pre-wrap",
          backgroundColor: "#ffff99",
          padding: "1rem",
          textAlign: "center",
        }}
      >
        {artist.strBiographyEN}
      </p>
      <a
        style={{ textAlign: "center", display: "block", margin: "auto" }}
        href={`http://${artist.strWebsite}`}
        target="_blank"
        rel="noreferrer"
      >
        Sitio Web Oficial
      </a>
    </section>
  );
};

export default SongArtist;
