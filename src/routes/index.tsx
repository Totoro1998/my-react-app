import { RouteObject } from "react-router-dom";
import ReactRoutes from "./react-router";
import RootLayout from "@/layout/RootLayout";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <RootLayout />,
    children: [ReactRoutes],
  },
];
export default routes;
