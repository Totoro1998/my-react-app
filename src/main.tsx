import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";
import "normalize.css";
import "./styles/index.css";

const router = createBrowserRouter(routes);

const container = document.getElementById("root");
const root = createRoot(container as HTMLDivElement);

root.render(
  // <StrictMode>
  //   <RouterProvider router={router} />
  // </StrictMode>,
  <RouterProvider router={router} />
);
