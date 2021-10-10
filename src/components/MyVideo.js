const MyVideo = () => {
  return (
    <div>
      <h2>My video</h2>
      <iframe
        width="540"
        height="330"
        src="https://www.youtube.com/embed/hcIHCTrj67Y"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default MyVideo;
