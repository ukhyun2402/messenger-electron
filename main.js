const {app, BrowserWindow} = require('electron');
const url = require('url');
const path = require('path');


const createWindow = function() {
    const win = new BrowserWindow({width: 800, height: 600});
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'dist', 'index.html'),
        protocol: 'file:',
        slashes: true
    }))
}

app.on('ready', createWindow);