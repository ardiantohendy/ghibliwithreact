import "../css/Footer.css";

function Footer() {
  return (
    <div className="mainBody">
      <div className="topFoot">
        <div className="logo">
          <h3>Studio Ghibli</h3>
        </div>
        <div className="options">
          <div className="shop">
            <h4>Shop</h4>
            <p>all product from Ghibli</p>
            <a href="#">poster</a>
            <a href="#">t-shirt</a>
            <a href="#">hoodie & jacket</a>
            <a href="#">bag</a>
            <a href="#">all Product</a>
          </div>
          <div className="theater">
            <h4>Theater</h4>
            <p>all stories from Ghibli but in theater</p>
            <a href="#">buy ticket</a>
            <a href="#">more info</a>
          </div>
          <div className="optionsLikeNav">
            <a href="/">home</a>
            <a href="/">filmography</a>
            <a href="/">in theaters</a>
            <a href="/">about</a>
          </div>
        </div>
      </div>
      <div className="botFoot"></div>
    </div>
  );
}

export default Footer;
