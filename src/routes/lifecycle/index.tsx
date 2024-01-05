import CommonLayout from "@/layout/CommonLayout";
import { RouteObject } from "react-router-dom";
import Mount from "@/pages/lifecycle/Mount";
import Update from "@/pages/lifecycle/Update";

const route: RouteObject = {
  path: "lifecycle",
  element: <CommonLayout />,
  children: [
    {
      path: "mount",
      element: <Mount />,
    },
    {
      path: "update",
      element: <Update />,
    },
  ],
};
export default route;
