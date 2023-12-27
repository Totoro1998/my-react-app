import { RouteObject } from "react-router-dom";
import ErrorPage from "@/pages/react-router/basic-demo/error-page";
import Root, {
  loader as rootLoader,
  action as rootAction,
} from "@/pages/react-router/basic-demo/root";
import Index from "@/pages/react-router/basic-demo";
import Contact, {
  loader as contactLoader,
  action as contactAction,
} from "@/pages/react-router/basic-demo/contact";
import EditContact, {
  action as editAction,
} from "@/pages/react-router/basic-demo/edit";
import { action as destroyAction } from "@/pages/react-router/basic-demo/destroy";
const route: RouteObject = {
  path: "basic-demo",
  element: <Root />,
  errorElement: <ErrorPage />,
  loader: rootLoader,
  action: rootAction,
  children: [
    {
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Index /> },
        {
          path: "contacts/:contactId",
          element: <Contact />,
          loader: contactLoader,
          action: contactAction,
        },
        {
          path: "contacts/:contactId/edit",
          element: <EditContact />,
          loader: contactLoader,
          action: editAction,
        },
        {
          path: "contacts/:contactId/destroy",
          action: destroyAction,
          errorElement: <div>Oops! There was an error.</div>,
        },
      ],
    },
  ],
};

export default route;
