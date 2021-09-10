import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header-logo">
          <h1>
            Be<span className="header-span">-</span>
            <span>Pin</span>
          </h1>
        </div>
        <div className="header-menu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="searchbar">Search</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
