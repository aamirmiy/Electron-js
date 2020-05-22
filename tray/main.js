console.log("main");
const electron=require("electron");
const app=electron.app

const path=require("path");
const url=require("url");
const Tray=electron.Tray
const iconpath = path.join(__dirname,'youtube_flat.jpg')
const Menu=electron.Menu
let win;

app.on('ready',function(){
    tray=new Tray(iconpath)

    const template=[
        {
            label:'Audio',
            submenu:[
                {
                    label:'Low',
                    type:'radio',
                    checked:true
                },
                {
                    label:'High',
                    type:'radio',
                }
            ]
        },
        {
            label:'Video',
            submenu:[
                {
                    label:"1280x720",
                    type:'radio',
                    checked:true
                },
                {
                    label:"1920x1080",
                    type:'radio',
                }
            ]
        }
    ]
    const ctxmenu=Menu.buildFromTemplate(template)
    tray.setContextMenu(ctxmenu)
    tray.setToolTip('Tray Application')
});
app.on('window-all-closed',() => {
    if(process.platform !== 'darwin'){
        app.quit()
    }
});
app.on('activate',() => {
    if(win == null){
    }
});