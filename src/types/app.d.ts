import React from "react";

export interface IMenu {
  title: string;
  icon?: React.ReactNode;
  children?: IMenu[];
  path: string;
}
