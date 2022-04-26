import { app, BrowserWindow, Menu, shell, dialog } from "electron";
import { readFileSync, writeFileSync } from "fs";
import { join } from "path";
import { bootstrap, destroy } from "./bootstrap";

const isDev = !app.isPackaged;
export async function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      webSecurity: false,
      contextIsolation: false,
      devTools: isDev,
    },
  });

  win.maximize();

  await bootstrap(win.webContents);

  const URL = isDev
    ? process.env.DEV_SERVER_URL
    : `file://${join(app.getAppPath(), "dist/render/index.html")}`;

  win.loadURL(URL);

  if (isDev) {
    win.webContents.openDevTools();
  } else {
    win.removeMenu();
  }

  win.on("closed", () => {
    destroy();
    win.destroy();
  });
  const m = Menu.buildFromTemplate([
    {
      label: "File",
      submenu: [
        {
            label: "Import JSON",
            click: () => {
              dialog
                .showOpenDialog({
                  title: "Open the json",
                  filters: [{ name: "config", extensions: ["json"] }]
                })
                .then((result) => {
                  const jsonFile = readFileSync(
                    join(result.filePaths[0])
                  ).toString();
                  writeFileSync(join(app.getPath("userData"), "/config.json"), jsonFile);
                  win.reload()
                });
            },
          },
        {
          label: "Export JSON",
          click: () => {
            dialog
              .showSaveDialog({
                title: "Save the json to...",
                filters: [{ name: "config", extensions: ["json"] }],
              })
              .then((result) => {
                const jsonFile = readFileSync(
                  join(app.getPath("userData"), "/config.json")
                ).toString();
                writeFileSync(result.filePath, jsonFile);
              });
          },
        },
        {
            label: "Export Table",
            click: () => {
              dialog
                .showSaveDialog({
                  title: "Save the json to...",
                  filters: [{ name: "config", extensions: ["json"] }],
                })
                .then((result) => {
                  const jsonFile = readFileSync(
                    join(app.getPath("userData"), "/config.json")
                  ).toString();
                  writeFileSync(result.filePath, jsonFile);
                });
            },
          },
      ],
      click: () => {
        shell.openExternal(
          "https://portal.microsofticm.com/imp/v3/incidents/create?tmpl=YH1J1j"
        );
      },
    },
    {
      label: "Create Incident",
      click: () => {
        shell.openExternal(
          "https://portal.microsofticm.com/imp/v3/incidents/create?tmpl=YH1J1j"
        );
      },
    },
    {
      label: "Develop",
      submenu: [
        {
          label: "Dev tool",
          click: () => {
            win.webContents.openDevTools({ mode: "bottom" });
          },
        },
      ],
    },
    {
      label: "Help",
      submenu: [
        {
          label: "Doc",
          submenu: [
            {
              label: "Dev POC",
              click: () => {
                shell.openExternal(
                  "https://dev.azure.com/msasg/ContentServices/_wiki/wikis/Microsoft%20Start%20Partner%20Hub%20Wiki/74518/Dev-POC"
                );
              },
            },
          ],
        },
      ],
    },
  ]);
  Menu.setApplicationMenu(m);
  return win;
}

export async function restoreOrCreateWindow() {
  let window = BrowserWindow.getAllWindows().find((w) => !w.isDestroyed());

  if (window === undefined) {
    window = await createWindow();
  }

  if (window.isMinimized()) {
    window.restore();
  }

  window.focus();
}
