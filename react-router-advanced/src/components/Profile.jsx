// src/components/Profile.jsx
import { Link, Outlet } from "react-router-dom";

export default function Profile() {
  return (
    <div className="p-6">
      <h1>User Profile</h1>

      <nav>
        <Link to="">Details</Link> | <Link to="settings">Settings</Link>
      </nav>

      <hr />
      <Outlet />
    </div>
  );
}
