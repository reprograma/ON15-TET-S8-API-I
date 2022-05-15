const express = require("express")
const app = express()

app.get("/", (request, response)=>{
    response.status(200).json(["Oi coisa linda"])
})

app.get("/oi", (request, response)=>{
    response.status(200).json(["oi princesa"])
})

app.listen(8080, ()=>{
    console.log("servidor rodando lindo na porta 8080")
})