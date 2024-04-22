import { Link, NavLink } from "react-router-dom";
import { FaBars, FaHeartbeat } from "react-icons/fa";
import { useEffect, useState } from "react";

const Header = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
      setIsActive(!isActive);
    };

    useEffect(() => {
      const handleScroll = () => {
        setIsActive(false);
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

  return (
    <>
      <header className="header">
        <div className="logo">
          <Link to="/" className="logo">
            <i>
              <FaHeartbeat />
            </i>
            MediMate
          </Link>
        </div>
        <nav className={`navbar ${isActive ? "active" : ""}`}>
          <NavLink className="nav-link" to="/about">
            Home
          </NavLink>
          <NavLink className="nav-link" to="/about">
            About
          </NavLink>
          <NavLink className="nav-link" to="/about">
            Register
          </NavLink>
          <NavLink className="nav-link" to="/about">
            Login
          </NavLink>

          <NavLink className="nav-link" to="/about">
            Dashboard
          </NavLink>
          <NavLink className="nav-link" to="/about">
            Logout
          </NavLink>
          <NavLink className="nav-link" to="/about">
            Logout
          </NavLink>
        </nav>
        <div id="menu-btn" onClick={toggleMenu}>
          <FaBars />
        </div>
      </header>
    </>
  );
};

export default Header;
