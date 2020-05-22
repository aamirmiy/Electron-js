const fs=require("fs");
const path=require("path");
btncreate=document.getElementById("btncreate")
btnread=document.getElementById("btnread")
btndelete=document.getElementById("btndelete")
fileName=document.getElementById("fileName")
filecontents=document.getElementById("filecontents")

let pathname=path.join(__dirname,"Files")
btncreate.addEventListener('click',function(event){
    let file=path.join(pathname,fileName.value)
    let contents =filecontents.value
    fs.writeFile(file,contents,function(err){
        if(err){
            return console.log(err)
        }
        console.log("The file was created")
    })
})
btnread.addEventListener('click',function(event){
    let file=path.join(pathname,fileName.value)
    fs.readFile(file,function(err,data){
        if(err){
            return console.log(err)
        }
        filecontents.value=data
        console.log("The file was read!")
    })
})
btndelete.addEventListener('click',function(event){
    let file=path.join(pathname,fileName.value)
    fs.unlink(file,function(err){
        if(err){
            return console.log(err)
        }
        fileName.value=''
        filecontents.value=''
        console.log("The file was deleted!")
    })
})
