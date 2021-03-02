/* eslint global-require: off, no-console: off */

/**
 * This module executes inside of electron's main process. You can start
 * electron renderer process from here and communicate with the other processes
 * through IPC.
 *
 * When running `yarn build` or `yarn build-main`, this file is compiled to
 * `./src/main.prod.js` using webpack. This gives us some performance wins.
 */

import 'core-js/stable';
import 'regenerator-runtime/runtime';

import path from 'path';
import { app, BrowserWindow, ipcMain, Menu, shell } from 'electron';
import { autoUpdater } from 'electron-updater';
import log from 'electron-log';
import { ChildProcess, fork } from 'child_process';

export default class AppUpdater {
  constructor() {
    log.transports.file.level = 'info';
    autoUpdater.logger = log;
    autoUpdater.checkForUpdatesAndNotify();
  }
}

let mainWindow: BrowserWindow | null = null;

if (process.env.NODE_ENV === 'production') {
  const sourceMapSupport = require('source-map-support');
  sourceMapSupport.install();
}

if (
  process.env.NODE_ENV === 'development' ||
  process.env.DEBUG_PROD === 'true'
) {
  require('electron-debug')();
}

const createWindow = async () => {
  const RESOURCES_PATH = app.isPackaged
    ? path.join(process.resourcesPath, 'assets')
    : path.join(__dirname, '../assets');

  const getAssetPath = (...paths: string[]): string => {
    return path.join(RESOURCES_PATH, ...paths);
  };

  mainWindow = new BrowserWindow({
    show: false,
    minWidth: 1024,
    minHeight: 728,
    icon: getAssetPath('icon.png'),
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
    },
  });

  // 加载main中html文件
  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  // @TODO: Use 'ready-to-show' event
  //        https://github.com/electron/electron/blob/master/docs/api/browser-window.md#using-ready-to-show-event
  mainWindow.webContents.on('did-finish-load', () => {
    if (!mainWindow) {
      throw new Error('"mainWindow" is not defined');
    }
    if (process.env.START_MINIMIZED) {
      mainWindow.minimize();
    } else {
      mainWindow.show();
      mainWindow.focus();
    }
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  // 默认隐藏菜单栏
  Menu.setApplicationMenu(null);

  // Open urls in the user's browser
  mainWindow.webContents.on('new-window', (event, url) => {
    event.preventDefault();
    shell.openExternal(url);
  });
};

/**
 * Add event listeners...
 */

app.whenReady().then(createWindow).catch(console.log);

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) createWindow();
});

// 服务器部分
// 通过fork创建服务器子进程
let server: ChildProcess | undefined;
ipcMain.on('StartServer', (e, arg: { msg: string }) => {
  if (!server) {
    if (process.env.NODE_ENV === 'development') {
      // 为子进程设置端口号环境变量
      server = fork(require.resolve('./server/index.js'), {
        env: { port: arg.msg },
      });
    } else {
      // 生产环境下，后端服务器代码打包至resource目录
      server = fork(
        path.join(process.resourcesPath, 'src', 'server', 'index.js'),
        [],
        {
          env: { port: arg.msg },
        }
      );
    }

    server?.on('message', (msg) => {
      // 将服务器子进程信息转发给渲染进程
      e.reply('ServerMessage', msg);
    });
  } else if (process.env.NODE_ENV === 'development') {
    // 服务器已在运行时，开发模式下可重启，生产模式提示已在运行
    server?.send({ msg: 'exit' });
    server = undefined;
    e.reply('ServerMessage', { msg: '服务器已停止' });
  } else {
    e.reply('ServerMessage', { msg: '服务器已在运行！' });
  }
});

app.on('window-all-closed', () => {
  // Respect the OSX convention of having the application in memory even
  // after all windows have been closed
  if (process.platform !== 'darwin') {
    server?.send({ msg: 'exit' });
    app.quit();
  }
});
