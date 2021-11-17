import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import sql from "../assets/sql.png";
import git from "../assets/git.png";
import java from "../assets/java.png";
import bootstrap from "../assets/bootstrap.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import power from "../assets/power.jpg";
import office from "../assets/office.jpg";
import team from "../assets/team.png";

const TecnologiasImages = () => {
  return (
    <div id="tecnologias" style={{ padding: "1rem" }}>
      <img src={javascript} alt="javascript" />
      <img src={react} alt="react" />
      <img src={sql} alt="sql" />
      <img src={git} alt="git" />
      <img src={java} alt="java" />
      <img src={bootstrap} alt="bootstrap" />
      <img src={html} alt="html" />
      <img src={css} alt="css" />
      <img src={power} alt="power BI" />
      <img src={office} alt="office" />
      <img src={team} alt="teamviewer" />
    </div>
  );
};

export default TecnologiasImages;
