import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";

export default function Profile() {
  const { path, url } = useRouteMatch();

  return (
    <div className="p-6">
      <h1>Profile Page</h1>

      <nav style={{ marginBottom: "15px" }}>
        <Link to={`${url}`}>Profile Details</Link> |{" "}
        <Link to={`${url}/settings`}>Profile Settings</Link>
      </nav>

      <hr />

      <Switch>
        {/* EXACT match for /profile */}
        <Route exact path={path} component={ProfileDetails} />

        {/* /profile/settings */}
        <Route path={`${path}/settings`} component={ProfileSettings} />
      </Switch>
    </div>
  );
}
