import React from "react";
import { Link } from "react-router-dom";

function AsideNavBar({
  token,
  signOut,
  wishlistItems,
  cartItems,
  setIsNavOpen,
}) {
  return (
    <div className="aside-navbar">
      {/* <div className="aside-nav-search-container aside-nav-search icon">
        <i className="fa fa-search" aria-hidden="true"></i>
        <input className="nav-search-input" placeholder="Search" />
      </div> */}

      <button
        className="btn btn-primary-ol btn-float aside-close-btn"
        onClick={() => setIsNavOpen(false)}
      >
        <i className="material-icons">close</i>
      </button>

      <nav>
        <ul className="list aside-nav-links-container">
          <li>
            <span className="nav-link">Profile</span>
          </li>
          <li>
            <Link className="link nav-link" to={"/products"}>
              Shop Now
            </Link>
          </li>

          {token === "" ? (
            <li>
              <Link className="link nav-link" to={"/signin"}>
                Sign In
              </Link>
            </li>
          ) : (
            <li>
              <p className="link nav-link" onClick={signOut}>
                Sign Out
              </p>
            </li>
          )}

          <li>
            <Link className="nav-icon-container black" to={"/wishlist"}>
              <i className="fas fa-heart badge-container nav-icon aside-nav-icon">
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
              <i className="fas fa-shopping-cart badge-container nav-icon aside-nav-icon">
                {cartItems.length > 0 && (
                  <span className="badge badge-lg">{cartItems.length}</span>
                )}
              </i>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default AsideNavBar;
