import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h3>Menu</h3>

      <nav className="sidebar-links">
        <NavLink to="/dashboard">
          Dashboard
        </NavLink>

        <NavLink to="/users">
          Users
        </NavLink>

        <NavLink to="/profile">
          Profile
        </NavLink>

        <NavLink to="/settings">
          Settings
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;