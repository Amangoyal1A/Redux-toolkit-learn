import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import "../Component/Navbar.css";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const { Cart } = useSelector((state) => state);
  return (
    <div className="navbar-container">
      <div>
        <NavLink to="/" className="navbar-logo">
          <div>
            <img src="ecom3.jpeg" alt="Logo" />
          </div>
        </NavLink>

        <div className="navbar-links">
          <NavLink to="/" className="navbar-link">
            <p style={{ fontSize: "25px", color: "white",fontFamily: "Times New Roman" }}>Home</p>
          </NavLink>
          <NavLink to="/" className="navbar-link">
            <p style={{ fontSize: "25px", color: "white",fontFamily: "Times New Roman" }}>About</p>
          </NavLink>
          <NavLink to="/cart" className="navbar-link">
            <div
              className="navbar-cart-icon"
              style={{ fontSize: "25px", color: "white" }}
            >
              <AiOutlineShoppingCart />
              {Cart.length > 0 && (
                <span
                  style={{
                    position: "absolute",
                    top: "17px",
                    right: "155px",
                    backgroundColor: "green",
                    color: "white",
                    width: "24px",
                    height: "22px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    animation: "bounce 1s infinite",
                    borderRadius: "50%",
                    fontSize: "16px"
                  }}
                >
                  {Cart.length}
                </span>
              )}
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
