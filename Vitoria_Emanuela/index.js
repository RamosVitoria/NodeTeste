const dalva = require("http");
const port = 80;
const servername = "localhost";
let lerArquivo = require("fs")// File System


server = dalva.createServer((req,res) => {
    switch(req.url){
        case "/":
            lerArquivo.readFile("index.html",(erro,data) => {
                res.writeHead(200,{"Content-Type": "text/html"})
                res.write(data)
                res.end();
            })
            break
            case "/soma_numeros":
                lerArquivo.readFile("soma_numeros.html",(erro,data) => {
                    res.writeHead(200,{"Content-Type": "text/html"})
                    res.write(data)
                    res.end();
                })
                break
                case "/conta_letras":
                lerArquivo.readFile("conta_letras.html",(erro,data) => {
                    res.writeHead(200,{"Content-Type": "text/html"})
                    res.write(data)
                    res.end();
                })
                
    } 
}) 

server.listen(port,servername,()=>{
    console.log("STARTED SUCEFULL")
})