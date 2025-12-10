import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <Router>
      <Switch>

        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />

        {/* Protected route */}
        <ProtectedRoute path="/profile" component={Profile} />

        {/* fallback */}
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}
