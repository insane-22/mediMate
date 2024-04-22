import { Link, NavLink } from "react-router-dom";
import { FaBars, FaHeartbeat } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useAuth } from "../context/auth";
import Swal from "sweetalert2";

const Header = () => {
  const [auth, setAuth] = useAuth();
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

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Logout Succesful!",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    });
  };

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
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
          <NavLink className="nav-link" to="/about">
            About
          </NavLink>

          {!auth.user ? (
            <>
              <NavLink className="nav-link" to="/register">
                Register
              </NavLink>
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
            </>
          ) : (
            <>
              <NavLink className="nav-link" to="/about">
                Dashboard
              </NavLink>
              <NavLink className="nav-link" to="/login" onClick={handleLogout}>
                Logout
              </NavLink>
            </>
          )}
        </nav>
        <div id="menu-btn" onClick={toggleMenu}>
          <FaBars />
        </div>
      </header>
    </>
  );
};

export default Header;
