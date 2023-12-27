import { RouteObject } from "react-router-dom";
import BasicDemoRoute from "./basic-demo";
import ReactRouterLayout from "@/layout/ReactRouterLayout";

const route: RouteObject = {
  path: "react-router",
  element: <ReactRouterLayout />,
  children: [BasicDemoRoute],
};
export default route;
