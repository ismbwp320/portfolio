import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">M&Ismail</Link>
        <div>
          <nav>
            <ul>
              <li><Link to="blog">Articles</Link></li>
              <li><Link to="projects">Projects</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
