import { Outlet } from "react-router-dom";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";
import menus, { addPathPrefix } from "@/menu";
import { IMenu } from "@/types/app";
import { useEffect, useMemo, useState } from "react";
function getMenuItem(menu: IMenu) {
  const label = <NavLink to={menu.path}>{menu.title}</NavLink>;
  if (menu.children) {
    menu.children = menu.children.map((child) => getMenuItem(child));
  }
  return {
    ...menu,
    label,
    key: menu.path,
  };
}
const addPathPrefixMenus = menus.map((menu) => addPathPrefix(menu));

function Sider() {
  const items = useMemo(() => {
    return addPathPrefixMenus.map((menu) => getMenuItem(menu));
  }, []);

  const [defaultSelectedKeys, setDefaultSelectedKeys] = useState<string[]>([]);

  useEffect(() => {
    const keyPath = localStorage.getItem("keyPath");
    if (keyPath) {
      setDefaultSelectedKeys(JSON.parse(keyPath));
    }
  }, []);

  function handleSelect(data: any) {
    localStorage.setItem("keyPath", JSON.stringify(data.keyPath));
  }
  return (
    <div className="sider w-[--wrapper-main-sider-width]">
      <Menu
        mode="inline"
        items={items}
        onSelect={handleSelect}
        selectedKeys={defaultSelectedKeys}
      />
    </div>
  );
}
function Header() {
  return (
    <header
      className="header h-[--wrapper-header-height] sticky z-[1000] top-0 bg-white backdrop-blur flex items-center px-6"
      style={{
        boxShadow:
          "0 1px 2px 0 rgba(0, 0, 0, 0.03), 0 1px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px 0 rgba(0, 0, 0, 0.02)",
      }}
    >
      header
    </header>
  );
}

export default function RootLayout() {
  return (
    <div className="wrapper w-full h-screen">
      <Header />
      <main className="main flex min-h-[calc(100%-var(--wrapper-header-height))]">
        <Sider />
        <div className="content w-[calc(100%-var(--wrapper-main-sider-width))]">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
