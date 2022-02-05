import Login from "src/pages/Login/Login";

const AuthenticatedRoutes = [

  {
    path: "/",
    exact: true,
    // appLayout: true,
    // className: "email-application",
    component: Login,
  },
  // {
  //   exact: true,
  //   // appLayout: true,
  //   // className: "email-application",
  //   component: NotFoundPage,
  // },
  
];

export default AuthenticatedRoutes;
