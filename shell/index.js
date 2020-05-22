const shell=require("electron").shell
const openbtn=document.getElementById("openbtn")
openbtn.addEventListener('click',function(event){
    shell.openItem("C:\\Users\\aamir\\Downloads\\IMG_20191112_122856.jpg")
})