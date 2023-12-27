import React from "react";
type MenuItem = {
  title: string;
  icon?: React.ReactNode;
  path: string;
};

export interface IMenu {
  title: string;
  icon?: React.ReactNode;
  children?: MenuItem[];
  path: string;
}
