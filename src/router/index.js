import { Switch, Route } from "react-router-dom";

import routes from "./path";

const AppRouter = () => {
  return (
    <Switch>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} exact>
          {route.component}
        </Route>
      ))}
    </Switch>
  );
};

export default AppRouter;
