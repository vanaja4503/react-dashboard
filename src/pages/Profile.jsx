import useAuth from "../hooks/useAuth";

function Profile() {
  const { user } = useAuth();

  return (
    <section>
      <h1>My Profile</h1>

      <div className="profile-card">
        <div className="avatar">
          {user?.name?.charAt(0).toUpperCase()}
        </div>

        <h2>{user?.name}</h2>
        <p>{user?.email}</p>
        <p>Account type: Demo user</p>
      </div>
    </section>
  );
}

export default Profile;