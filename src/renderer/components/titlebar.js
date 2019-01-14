import React from "react";
import { ButtonGroup, Button, Icon } from "@blueprintjs/core";

import "../res/scss/titlebar.scss";

const electron = window.require("electron");
const window = electron.remote.getCurrentWindow();

const ICON_SIZE = 12;

const onMin = () => {
  window.minimize();
};

const onMax = () => {
  if (window.isMaximized()) {
    window.unmaximize();
  } else {
    window.maximize();
  }
};

const onClose = () => {
  window.close();
};

const TitleBar = () => (
  <div className="titlebar">
    <div className="app-title">
      <span>Manga App</span>
    </div>
    <ButtonGroup className="window-buttons">
      <Button
        className="min-btn"
        icon={<Icon icon="minus" iconSize={ICON_SIZE} />}
        minimal
        onClick={onMin}
      />
      <Button
        className="max-btn"
        icon={<Icon icon="square" iconSize={ICON_SIZE - 2} />}
        minimal
        onClick={onMax}
      />
      <Button
        className="close-btn"
        icon={<Icon icon="cross" iconSize={ICON_SIZE} />}
        minimal
        onClick={onClose}
      />
    </ButtonGroup>
  </div>
);

export default TitleBar;
