import React from "react";
import { Navigation } from "../ui/navigation/Navigation";

export const Layout = props => (
  <div>
    <Navigation />
    <div className="container">{props.children}</div>
  </div>
);
