import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Page Not Found</h2>

      <p>The page you requested does not exist.</p>

      <Link to="/dashboard">
        Go to Dashboard
      </Link>
    </div>
  );
}

export default NotFound;