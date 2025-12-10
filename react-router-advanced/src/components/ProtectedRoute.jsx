import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const isAuthenticated = true; // temp simulation

  return isAuthenticated ? children : <Navigate to="/login" replace />;
}
