
import { useDispatch, useSelector } from "react-redux";
import users from "../data/users";
import Input from "../components/common/Input";
import { setSearchTerm } from "../features/users/userSlice";

function Users() {
  const dispatch = useDispatch();

  const searchTerm = useSelector(
    (state) => state.users.searchTerm
  );

  const filteredUsers = users.filter((user) =>
    `${user.name} ${user.email} ${user.username} ${user.company}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <section>
      <h1>Users</h1>
      <p>View and search your custom users.</p>

      <Input
        label="Search users"
        value={searchTerm}
        onChange={(event) =>
          dispatch(setSearchTerm(event.target.value))
        }
        placeholder="Search by name, email, username, or company"
      />

      <p>
        Showing {filteredUsers.length} of {users.length} users
      </p>

      <div className="users-grid">
        {filteredUsers.map((user) => (
          <article className="user-card" key={user.id}>
            <h3>{user.name}</h3>
            <p>Username: @{user.username}</p>
            <p>Email: {user.email}</p>
            <p>Company: {user.company}</p>
          </article>
        ))}
      </div>

      {filteredUsers.length === 0 && (
        <p>No matching users found.</p>
      )}
    </section>
  );
}

export default Users;
