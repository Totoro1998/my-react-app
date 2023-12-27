import { Outlet } from "react-router-dom";
export default function ReactRouterLayout() {
  return (
    <div className="h-full">
      <Outlet />
    </div>
  );
}
