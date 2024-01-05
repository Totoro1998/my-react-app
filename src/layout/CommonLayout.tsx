import { Outlet } from "react-router-dom";
export default function CommonLayout() {
  return (
    <div className="h-full">
      <Outlet />
    </div>
  );
}
