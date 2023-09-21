import "../css/FilmographyPage.css";
import instanceImg from "../assets/images/npOnzAbLh6VOIu3naU5QaEcTepo.jpg";
import instanceImg2 from "../assets/images/grave.jpg";

function FilmographyPage() {
  return (
    <div className="filmPage">
      <div className="subTxt">
        <h3>filmography.</h3>
      </div>
      <div className="mainContent">
        <div className="leftCard">
          <div className="imgCard">
            <img src={instanceImg} alt="" />
          </div>
          <div className="descCard">
            <h3>Castle in the Sky</h3>
            <h4>天空の城ラピュタ</h4>
            <h5>Score: 95</h5>
            <p>
              The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great
              civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.
            </p>
            <a href="#">Buy</a>
            <a href="#">More Info</a>
          </div>
        </div>
        <div className="rightCard">
          <div className="descCard">
            <h3>Grave of the Fireflies</h3>
            <h4>火垂るの墓</h4>
            <h5>Score: 97</h5>
            <p>
              In the latter part of World War II, a boy and his sister, orphaned when their mother is killed in the firebombing of Tokyo, are left to survive on their own in what remains of civilian life in Japan. The plot follows this boy
              and his sister as they do their best to survive in the Japanese countryside, battling hunger, prejudice, and pride in their own quiet, personal battle.
            </p>
            <a href="#">Buy</a>
            <a href="#">More Info</a>
          </div>
          <div className="imgCard">
            <img src={instanceImg2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilmographyPage;
