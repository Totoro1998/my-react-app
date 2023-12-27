import { RouteObject } from "react-router-dom";
import ReactRoutes from "./react-router";
import RootLayout from "@/layout/RootLayout";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      ReactRoutes,
      {
        path: "*",
        element: <div>Not Found</div>,
      },
    ],
  },
];
export default routes;
