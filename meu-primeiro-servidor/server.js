const { application } = require("express")
const express = require("express") // executa a funcção express
const app = express()

app.get( "/",(request, response)=>{
    response.status(200).json(["salve, as monas e minas"])
})

app.get("/Oi", (request, response)=>{
    response.status(200).json(["Abalou"])
})
app.listen(8081, ()=>{
    console.log("meu servidor ta rodando na porta 8080 arrasei!!!!")
})