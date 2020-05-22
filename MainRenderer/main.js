console.log("main.js");
const electron=require("electron");
const app=electron.app
const BrowserWindow=electron.BrowserWindow
const path=require("path");
const url=require("url");

let winone,wintwo;
function createwindow() {
    winone= new BrowserWindow({
        webPreferences:{
            nodeIntegration:true
        }
    });
    wintwo= new BrowserWindow();
    winone.loadURL(url.format({
        pathname:path.join(__dirname,'one.html'),
        protocol:'file',
        slashes: true
    }));
    wintwo.loadURL(url.format({
        pathname:path.join(__dirname,'two.html'),
        protocol:'file',
        slashes: true
    }));

    winone.webContents.openDevTools();
    wintwo.webContents.openDevTools();
    winone.on('closed',() => {
        win=null;
    })
    wintwo.on('closed',() => {
        win=null;
    })
}
app.on('ready',createwindow);
app.on('window-all-closed',() => {
    if(process.platform !== 'darwin'){
        app.quit()
    }
});
app.on('activate',() => {
    if(win == null){
        createwindow()
    }
});