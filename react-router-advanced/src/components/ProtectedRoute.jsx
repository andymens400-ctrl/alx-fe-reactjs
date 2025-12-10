import { Route, Redirect } from "react-router-dom";

export default function ProtectedRoute({ component: Component, ...rest }) {
  const isAuthenticated = true; // simulate login

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}
