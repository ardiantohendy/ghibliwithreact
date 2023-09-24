import "../css/FilmographyPage.css";
import instanceImg from "../assets/images/npOnzAbLh6VOIu3naU5QaEcTepo.jpg";
import instanceImg2 from "../assets/images/grave.jpg";

function FilmographyPage(props) {
  return (
    <div className="filmPage">
      <div className="subTxt">
        <h3>filmography.</h3>
      </div>
      <div className="mainContent">{props.getList(props.getFilmList)}</div>
    </div>
  );
}

export default FilmographyPage;
