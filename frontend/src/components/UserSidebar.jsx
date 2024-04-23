import { FaHeartbeat } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { BiHome  } from "react-icons/bi";

const UserSidebar = () => {
  return (
    <div className="menu">
      <div className="logoo">
        <FaHeartbeat className="logo-menu-icon" />
        <h2>MediMate</h2>
      </div>

      <div className="menu-list">
        <NavLink
          to="/dashboard/user/profile"
          className="item"
          activeClassName="active"
        >
          <BiHome className="logo-menu" />
          Profile
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
        <NavLink to="/" className="item">
          <BiHome className="logo-menu" />
          Dashboard
        </NavLink>
      </div>
    </div>
  );
};

export default UserSidebar;
