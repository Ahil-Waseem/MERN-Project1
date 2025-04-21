import React, { useState } from "react";
import { Link , useNavigate} from "react-router-dom";
import "../styles/Navbar1.css";

const Navbar = () => {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout =()=>{
  localStorage.removeItem("authToken");
  navigate("/login");
  }

  return (
    <nav className="navbar">
      <h2 className="logo">OrderFoods</h2>

      {/* Hamburger Menu for Mobile */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <div className="navbar-right">
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><Link to="/home">Home</Link></li>
          {localStorage.getItem("authToken") ? (
            <li><Link to="/">My Orders</Link></li>
          ) : null}
        </ul>
        {!localStorage.getItem("authToken") ?
        <div className="auth-buttons">
          <Link to="/login" className="login-btn">Login</Link>
          <Link to="/signup" className="signup-btn">SignUp</Link>
        </div>

: 
<div>
<div className="logout-btn" onClick={handleLogout}>Logout</div>
</div>

}
      </div>
    </nav>
  );
};

export default Navbar;
