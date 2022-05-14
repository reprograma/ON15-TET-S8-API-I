const express = require("express")
const app = express()

app.get("/", (request, response)=>{
    response.status(200).json(["Salve, mundão"])
})

app.get("/oi", (request, response)=>{
    response.status(200).json(["Olá, Paola"])
})

app.listen(8080, ()=>{
    console.log("meu servidor ta rodando")
})
