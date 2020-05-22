console.log("From one.js");

const BrowserWindow=require('electron').remote.BrowserWindow;
const path=require('path');
const url=require('url');
const newinbtn = document.getElementById("newinbtn");
newinbtn.addEventListener('click',function(event){
    let winthree = new BrowserWindow();
    winthree.loadURL(url.format({
        pathname:path.join(__dirname,'three.html'),
        protocol:'file',
        slashes:true
    }));
    winthree.webContents.openDevTools();
})
