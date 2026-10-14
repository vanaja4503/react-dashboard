import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../services/userService";
import Loader from "../components/common/Loader";
import ErrorMessage from "../components/common/ErrorMessage";

function Dashboard() {
  const {
    data: users = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  return (
    <section>
      <h1>Dashboard Overview</h1>
      <p>Welcome to your React dashboard.</p>

      {isLoading && <Loader />}

      {isError && (
        <ErrorMessage message={error.message} />
      )}

      {!isLoading && !isError && (
        <div className="stats-grid">
          <div className="stat-card">
            <h3>Total Users</h3>
            <p>{users.length}</p>
          </div>

          <div className="stat-card">
            <h3>Application</h3>
            <p>Active</p>
          </div>

          <div className="stat-card">
            <h3>Data Source</h3>
            <p>API</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Dashboard;