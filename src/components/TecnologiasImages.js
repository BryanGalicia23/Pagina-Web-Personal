import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import bootstrap from "../assets/bootstrap.png";

const TecnologiasImages = () => {
  return (
    <div id="tecnologias" style={{ padding: "4px 8px 8px 16px" }}>
      <img src={javascript} alt="javascript" />
      <img src={react} alt="react" />
      <img
        src="http://assets.stickpng.com/images/5847f981cef1014c0b5e48be.png"
        alt="git"
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png"
        alt="html"
      />
      <img
        src="https://lineadecodigo.com/wp-content/uploads/2014/04/css.png"
        alt="css"
      />
      <img
        src="https://cdn-icons-png.flaticon.com/512/603/603201.png"
        alt="sql"
      />
      <img src={bootstrap} alt="bootstrap" />
      <img
        src="https://i.blogs.es/8d2420/650_1000_java/1366_2000.png"
        alt="java"
      />
      <img
        src="https://e7.pngegg.com/pngimages/106/664/png-clipart-linux-linux-thumbnail.png"
        alt="linux"
      />
    </div>
  );
};

export default TecnologiasImages;
