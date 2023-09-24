import "../css/Navbar.css";

function Navbar() {
  return (
    <div className="container">
      <div className="navbar">
        <div className="logo">
          <p>Ghibli</p>
        </div>
        <div className="listOptions">
          <ul>
            <li>
              <a href="/">home</a>
            </li>
            <li>
              <a href="/filmography">filmograpgy</a>
            </li>
            <li>
              <a href="#">in theaters</a>
            </li>
            <li>
              <a href="/about">about</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
