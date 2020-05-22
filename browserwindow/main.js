console.log("main");
const electron=require("electron");
const app=electron.app
const BrowserWindow = electron.BrowserWindow;
const path=require("path");
const url=require("url");

let child,parentwindow;
function createwindow() {
    parentwindow=new BrowserWindow({title:'parent'});
    child= new BrowserWindow({show:false,parent:parentwindow,modal:true,title:'child'});
    child.loadURL("https://www.coursera.org/");
    child.once('ready-to-show',()=>{
        child.show()
    });
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