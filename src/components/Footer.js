import "../css/Footer.css";

function Footer() {
  return (
    <div className="mainBody">
      <div className="topFoot">
        <div className="logo">
          <h3>Studio Ghibli</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
        <div className="options">
          <div className="shop">
            <h4>Shop</h4>
            <p>all product from Ghibli</p>
            <ul>
              <li>
                {" "}
                <a href="#">poster</a>
              </li>
              <li>
                <a href="#">t-shirt</a>
              </li>
              <li>
                {" "}
                <a href="#">hoodie & jacket</a>
              </li>
              <li>
                <a href="#">bag</a>
              </li>
              <li>
                <a href="#">all Product</a>
              </li>
            </ul>
          </div>
          <div className="theater">
            <h4>Theater</h4>
            <p>all stories from Ghibli but in theater</p>
            <ul>
              <li>
                <a href="#">buy ticket</a>
              </li>
              <li>
                <a href="#">more info</a>
              </li>
            </ul>
          </div>
          <div className="optionsLikeNav">
            <ul>
              <li>
                <a href="/">home</a>
              </li>
              <li>
                <a href="/">filmography</a>
              </li>
              <li>
                <a href="/">in theaters</a>
              </li>
              <li>
                <a href="/">about</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="botFoot"></div>
    </div>
  );
}

export default Footer;
