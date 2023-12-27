import { IMenu } from "@/types/app";
import ReactRouterMenu from "./react-router";

const menus: IMenu[] = [ReactRouterMenu];

export function addPathPrefix(menu: IMenu, parentPath = "") {
  const fullPath = `${parentPath}/${menu.path}`.replace(/\/+/g, "/");

  if (menu.children) {
    menu.children = menu.children.map((child) =>
      addPathPrefix(child, fullPath)
    );
  }
  return {
    ...menu,
    path: fullPath,
  };
}

export default menus;
