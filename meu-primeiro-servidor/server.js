const express = require("express")
const app = express()

app.get("/", (request, response)=>{
    response.status(200).json(["Salve"])
})

app.get("/ola", (request, response)=>{
    response.status(200).json(["oi"])
})

app.listen(9090, ()=>{
console.log("meu servidor está rodando na porta 9090 Graças a Deus")
})