import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAuth, useCart, useWishlist } from "../../context/index";
import AsideNavBar from "./AsideNavBar.jsx";
import { SearchBar } from "../../components";
import "./navbar.css";
function NavBar() {
  const { pathname } = useLocation();

  const {
    signOut,
    authState: { token },
  } = useAuth();

  const { cartItems } = useCart();

  const { wishlistItems } = useWishlist();
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsNavOpen(false);
  }, [pathname]);

  const toggleIsOpen = () => {
    setIsNavOpen((prev) => !prev);
  };

  return (
    <header className="navbar-container bg-primary">
      <Link to={"/"} className="link white">
        <h2 className="nav-logo">Emporium</h2>
      </Link>

      {isNavOpen && (
        <AsideNavBar
          token={token}
          signOut={signOut}
          wishlistItems={wishlistItems}
          cartItems={cartItems}
          setIsNavOpen={setIsNavOpen}
        />
      )}

      {pathname === "/products" && <SearchBar />}

      <nav>
        <ul className={"list nav-links-container"}>
          <li>
            <Link className="link white nav-link" to={"/products"}>
              Shop Now
            </Link>
          </li>

          {token && (
            <li>
              <Link className="link white nav-link" to={"/orders"}>
                My orders
              </Link>
            </li>
          )}

          <li>
            <Link className="nav-icon-container black" to={"/wishlist"}>
              <i className="fas fa-heart badge-container nav-icon">
                {wishlistItems.length > 0 && (
                  <span className="badge badge-lg nav-icon">
                    {wishlistItems.length}
                  </span>
                )}
              </i>
            </Link>
          </li>

          <li>
            <Link className="nav-icon-container black" to={"/cart"}>
              <i className="fas fa-shopping-cart badge-container nav-icon">
                {cartItems.length > 0 && (
                  <span className="badge badge-lg">{cartItems.length}</span>
                )}
              </i>
            </Link>
          </li>

          {token === "" ? (
            <li>
              <Link className="link white nav-link" to={"/signin"}>
                Sign In
              </Link>
            </li>
          ) : (
            <li>
              <p className="link white nav-link" onClick={signOut}>
                Sign Out
              </p>
            </li>
          )}
        </ul>
        <i className={"material-icons hamburger-icon"} onClick={toggleIsOpen}>
          {isNavOpen ? "close" : "menu"}
        </i>
      </nav>
    </header>
  );
}
export default NavBar;
