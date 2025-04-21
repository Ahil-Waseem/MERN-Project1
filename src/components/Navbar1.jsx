import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar1.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
    setMenuOpen(false); // Close menu on logout
  };

  return (
    <nav className="navbar">
      <h2 className="logo">OrderFoods</h2>

      {/* Hamburger Menu */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <div className={`navbar-right ${menuOpen ? "active" : ""}`}>
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li onClick={() => setMenuOpen(false)}><Link to="/home">Home</Link></li>
          {localStorage.getItem("authToken") && (
            <li onClick={() => setMenuOpen(false)}><Link to="/">My Orders</Link></li>
          )}
        </ul>

        {!localStorage.getItem("authToken") ? (
          <div className="auth-buttons">
            <Link to="/login" className="login-btn" onClick={() => setMenuOpen(false)}>Login</Link>
            <Link to="/signup" className="signup-btn" onClick={() => setMenuOpen(false)}>SignUp</Link>
          </div>
        ) : (
          <div>
            <div className="logout-btn" onClick={handleLogout}>Logout</div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
