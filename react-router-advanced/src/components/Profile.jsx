import { Link, Outlet } from "react-router-dom";

export default function Profile() {
  return (
    <div>
      <h1>Profile</h1>

      <nav>
        <Link to="">Profile Details</Link> |{" "}
        <Link to="settings">Profile Settings</Link>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}
