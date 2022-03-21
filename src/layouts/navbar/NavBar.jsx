import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/index";
import "./navbar.css";
function NavBar() {
  const {
    signOut,
    authState: { token },
  } = useAuth();

  console.log(token)
  console.log(token === "")
  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);
  }, []);
  const [isOpen, setIsOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const toggleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <header className="navbar-container bg-primary">
      <Link to={"/"} className="link white">
        <h2 className="nav-logo">Emporium</h2>
      </Link>

      <nav>
        {(isOpen || screenWidth > 800) && (
          <ul className={"list nav-links-container"}>
            <li className="nav-search-container">
              <input
                className="input nav-search"
                type="search"
                placeholder="Search"
              />
            </li>

            {token==="" ? (
              <li>
                <Link className="link btn btn-primary-inv" to={"/signin"}>
                  Sign In
                </Link>
              </li>
            ) : (
              <li>
                <button className="link btn btn-primary-inv" onClick={signOut}>
                  Sign Out
                </button>
              </li>
            )}

            <li>
              <Link className="nav-icon-container black" to={"/wishlist"}>
                <i className="fas fa-heart badge-container nav-icon">
                  <span className="badge badge-lg nav-icon">6</span>
                </i>
              </Link>
            </li>

            <li>
              <Link className="nav-icon-container black" to={"/cart"}>
                <i className="fas fa-shopping-cart badge-container nav-icon">
                  <span className="badge badge-lg">96</span>
                </i>
              </Link>
            </li>
          </ul>
        )}
        <i className={"material-icons hamburger-icon"} onClick={toggleIsOpen}>
          {isOpen ? "close" : "menu"}
        </i>
      </nav>
    </header>
  );
}

export default NavBar;
