import Message from "./Message";
import SongArtist from "./SongArtist";
import SongLyric from "./SongLyric";

const SongDetails = ({ search, lyric, bio }) => {
  if (!lyric || !bio) return null;

  return (
    <>
      {lyric.message.header.status_code === 404 ||
      lyric.name === "AbortError" ||
      lyric.err ? (
        <Message
          msg={`Error: No existe la canción "<em>${search.song}</em>"`}
          bgColor="#dc3545"
        />
      ) : (
        <SongLyric
          title={search.song}
          lyrics={lyric.message.body.lyrics.lyrics_body}
        />
      )}
      {bio.artists ? (
        <SongArtist artist={bio.artists[0]} />
      ) : (
        <Message
          msg={`Error: No existe el intérprete "<em>${search.artist}</em>"`}
          bgColor="#dc3545"
        />
      )}
    </>
  );
};

export default SongDetails;
