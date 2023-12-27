import { Outlet } from "react-router-dom";
import "@/styles/root.module.less";
export default function RootLayout() {
  return (
    <div className="wrapper">
      <header className="header">header</header>
      <main className="main">
        <div className="nav">nav</div>
        <div className="content w-8/12">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
