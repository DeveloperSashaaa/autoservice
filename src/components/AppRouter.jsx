import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import { authRoutes, publicRoutes } from "../routes";
import { Context } from "../main";
import { observer } from "mobx-react";

const AppRouter = observer(() => {
  const { user } = useContext(Context);
  return (
    <Switch>
      {user.isAuth &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} component={Component} exact />
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact />
      ))}
    </Switch>
  );
});

export default AppRouter;
