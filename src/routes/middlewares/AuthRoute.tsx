import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import AuthStore from "../../redux/types/AuthStore";
import { AppState } from "../../redux/types/AppState";
import { getValue } from "src/redux/utils/lodash";
import AuthenticatedRoutes from "../authRoutes";
const AuthRoute = ({ component: Component, ...rest }: any) => {
  // const {  access_token }: AuthStore = useSelector(
  // 	(state: AppState) => state.auth
  // );
  let access_token = localStorage.getItem("access_token");
  return (
    <>
      {AuthenticatedRoutes.map((route, key) => {
        return route.component ? (
          <Route
            key={key}
            path={route.path}
            exact={route.exact}
            // name={route.name}
            render={(props: any) => (
              <route.component
                {...props}
                // permissionList={permissions.length !== 0 ? permissions.map((item) => item.action) : []}
              />
            )}
          />
        ) : null;
      })}
    </>
  );
};

export default AuthRoute;
