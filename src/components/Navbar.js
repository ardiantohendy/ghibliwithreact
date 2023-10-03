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
              <a href="/ghibliwithreact/">home</a>
            </li>
            <li>
              <a href="/ghibliwithreact/filmography/">filmograpgy</a>
            </li>
            <li>
              <a href="#">in theaters</a>
            </li>
            <li>
              <a href="#">shop</a>
            </li>
            <li>
              <a href="/ghibliwithreact/about/">about</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
