import { RouteObject } from "react-router-dom";
import ReactRoutes from "./react-router";
import RootLayout from "@/layout/RootLayout";
import LifeCycleRoutes from './lifecycle'

const routes: RouteObject[] = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      ReactRoutes,
      LifeCycleRoutes,
      {
        path: "*",
        element: <div>Not Found</div>,
      },
    ],
  },
];
export default routes;
