import { AuthenticationPage, HomePage, PanelPage } from "../pages";

const routes = [
  {
    path: "/",
    component: <HomePage />,
  },
  {
    path: "/panel",
    component: <PanelPage />,
  },
  {
    path: "/authentication",
    component: <AuthenticationPage />,
  },
];

export default routes;
