import { FaDisease, FaHeartbeat } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { BiHome } from "react-icons/bi";
const DocSidebar = () => {
  return (
    <div className="menu">
      <div className="logoo">
        <FaHeartbeat className="logo-menu-icon" />
        <h2>MediMate</h2>
      </div>

      <div className="menu-list">
        <NavLink
          to="/dashboard/doctor/profile"
          className="item"
          activeclassname="active"
        >
          <BiHome className="logo-menu" />
          Profile
        </NavLink>
        <NavLink to="/dashboard/doctor/diagnose   " className="item">
          <FaDisease className="logo-menu" />
          Diagnose
        </NavLink>
        <NavLink to="/" className="item">
          <BiHome className="logo-menu" />
          Dashboard
        </NavLink>
        <NavLink to="/" className="item">
          <BiHome className="logo-menu" />
          Dashboard
        </NavLink>
        <NavLink to="/" className="item">
          <BiHome className="logo-menu" />
          Dashboard
        </NavLink>
      </div>
    </div>
  );
};

export default DocSidebar;
