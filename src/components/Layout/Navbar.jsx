import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Button from "../common/Button";

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/login", { replace: true });
  }

  return (
    <header className="navbar">
      <Link to="/dashboard" className="brand">
        React Dashboard
      </Link>

      <div className="navbar-right">
        <span>{user?.name}</span>

        <Button onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </header>
  );
}

export default Navbar;