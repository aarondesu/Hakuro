import React from "react";
import { ButtonGroup, Button, Tabs, Tab } from "@blueprintjs/core";

const NavBar = ({}) => (
  <div id="navbar">
    <Tabs id="navbar-tabs" selectedTabId="ml">
      <Tab id="ml" title="Manga List" />
      <Tab id="md" title="Downloads" />
    </Tabs>
  </div>
);

export default NavBar;
