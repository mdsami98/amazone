import React from "react";
import "../css/header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";
function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuth = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          src="https://www.nicepng.com/png/detail/16-167642_amazon-logo-amazon-logo-white-text.png"
          alt=""
          className="header__logo"
        />
      </Link>

      <div className="header__search">
        <input type="text" className="header__serachInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="header__options">
          <span className="header_optionsLineOne">
            {user ? user.email : "Hello, gust"}
          </span>
          {user ? (
            <div className="sign__out" onClick={handleAuth}>
              <span className="header_optionsLineTwo">Sign Out</span>
            </div>
          ) : (
            <Link to="/login">
              <span className="header_optionsLineTwo">Sign In</span>
            </Link>
          )}
        </div>
        <div className="header__options">
          <span className="header_optionsLineOne">Returns</span>
          <span className="header_optionsLineTwo">& Orders</span>
        </div>
        <div className="header__options">
          <span className="header_optionsLineOne">Your</span>
          <span className="header_optionsLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__busket">
            <ShoppingCartIcon />
            <span className="header_optionsLineTwo cart_count">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;

// TODO 103min
