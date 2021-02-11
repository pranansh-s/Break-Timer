const electron = require('electron');
const { app, Menu, Tray, BrowserWindow } = electron;
let win, tray;

app.on('ready', () => {
  win = new BrowserWindow({frame: false, transparent: true, resizable: false, skipTaskbar: true, title: 'BreakTimer', icon: './public/logo.ico', webPreferences: {nodeIntegration: true, enableRemoteModule: true}});
  win.maximize();
  win.setAlwaysOnTop(true, 'normal');
  win.loadFile('./public/index.html');

  tray = new Tray('./public/logo.ico');
  const menu = Menu.buildFromTemplate([
    // {label: 'Interval Time', submenu: [
    //   {label: "15min"},
    //   {label: "30min"},
    //   {label: "45min"},
    //   {label: "60min"}
    // ]},
    // {label: 'Relax Time', submenu: [
    //   {label: "30sec"},
    //   {label: "1min"},
    //   {label: "5min"},
    //   {label: "15min"}
    // ]},
    // {type: 'separator'},
    {label: 'Exit', type: 'normal', click: app.quit}
  ]);
  tray.setContextMenu(menu);
});
