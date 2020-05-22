console.log("main");
const electron=require("electron");
const app=electron.app
const BrowserWindow = electron.BrowserWindow;
const path=require("path");
const url=require("url");
const Menu=electron.Menu
const MenuItem=electron.MenuItem
const globalShortcut = electron.globalShortcut

let win;
function createwindow() {
    win= new BrowserWindow();
    win.loadURL(url.format({
        pathname:path.join(__dirname,'index.html'),
        protocol:'file',
        slashes:true
    }));
    win.webContents.openDevTools();
    win.on('closed',() =>{
        win=null;
    })
}
app.on('ready',function(){
    createwindow()
    const template=[
        {
            label:'Edit',
            submenu:[
                { role:'undo'},
                { role:'redo'},
                { type:'separator'},
                { role:'cut'},
                { role:'copy'},
                { role:'paste'},
                { role:'pasteandmatchstyle'},
                { role:'delete'},
                { role:'selectall'}
            ]
        },
        {
            label:'demo',
            submenu:[
                {
                    label:'submenu1',
                    click:function(){
                        console.log('clicked submenu1')
                    }
                },
                {
                    type:'separator'
                },
                {
                    label:'submenu2'
                }
            ]
        },
        {
            label:'help',
            submenu:[
                {
                label:'about electron',
                click:function(){
                    electron.shell.openExternal("https://www.electronjs.org/blog") 
                },
                accelerator: 'CmdOrCtrl + Shift + H'
            }

            ]
            
            }
        ]
    
    
   const menu=Menu.buildFromTemplate(template)
   Menu.setApplicationMenu(menu)
   const ctxmenu=new Menu()
   ctxmenu.append(new MenuItem({
       label:'hello',
       click:function(){
           console.log('Clicked on hello')
       }
   }))
   win.webContents.on('context-menu',function(e,params){
       ctxmenu.popup(win,params.x,params.y)
   })
   globalShortcut.register('Alt+1',function(){
       win.show()
   })
});

app.on('will-quit',function(){
    globalShortcut.unregisterAll()
})
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