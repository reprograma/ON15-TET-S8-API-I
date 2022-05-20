const express = require("express") //chamando o express para este arquivo
const app = express() //executar express e guardado em "app"

app.get("/",(request,response)=>{
    response.status(200).json(["salve, mundao"])
})

app.get("/ola", (request,response)=>{
    response.status(200).json(["oiiiii!!"])
})

//confirgurar uma porta
app.listen(8080, ()=>{
    console.log("meu servidor ta rodadno na porta 8080!")
})