const { app, BrowserWindow } = require("electron");
const windowStateKeeper = require("electron-window-state");

const log = require("electron-log");
const path = require("path");
const url = require("url");

const { NODE_ENV } = process.env;

// TODO: Add a slpash screen
const createSplashScreen = () => {};

// Create the window
var mainWindow;
const createWindow = async () => {
  // Create the window state handler
  var windowState = windowStateKeeper({
    defaultWidth: 640,
    defaultHeight: 360
  });

  // Create the window
  var window = new BrowserWindow({
    title: "Hakuro - Manga Application",
    x: windowState.x,
    y: windowState.y,
    width: windowState.width,
    height: windowState.height,
    minWidth: 640,
    minHeight: 360,
    frame: true,
    show: false,
    webPreferences: {
      devTools: true,
      webSecurity: false
    }
  });

  // Load the contents
  window.loadURL(
    NODE_ENV === "development"
      ? "http://localhost:8080/"
      : url.format({
          pathname: path.join(app.getAppPath(), "/build/index.html"),
          protocol: "file",
          slashes: true
        })
  );

  // Remove menubar
  window.setMenu(null);

  window.webContents.on("did-finish-load", () => {
    window.show();
    // Open webtools for debugging
    window.webContents.openDevTools();
  });

  windowState.manage(window);

  if (NODE_ENV === "development") {
    // Display info on log
    log.info("App starting in development mode...");

    const {
      default: installExtension,
      REACT_DEVELOPER_TOOLS,
      REDUX_DEVTOOLS
    } = require("electron-devtools-installer");
    const forceDownload = !!process.env.UPGRADE_EXTENSIONS;

    // Install Redux & React developer tools
    installExtension(REACT_DEVELOPER_TOOLS, forceDownload)
      .then(name => log.info(`Added Extension: ${name}`))
      .catch(err => log.error(`Error installing extension: ${err}`));

    installExtension(REDUX_DEVTOOLS, forceDownload)
      .then(name => log.info(`Added Extension: ${name}`))
      .catch(err => log.error(`Error installing extension: ${err}`));
  }

  window.on("closed", () => {
    window = null;
  });

  return window;
};

// Application event handlers
// WINDOWS
app.on("ready", () => {
  mainWindow = createWindow();
});
// MAC OS
app.on("activate", () => {
  if (mainWindow == null) {
    mainWindow = createWindow();
  }
});
app.on("window-all-closed", () => {
  // Check if not MAC OS to respect MAC OS application etique
  if (process.platform !== "darwin") {
    app.quit();
  }
});
