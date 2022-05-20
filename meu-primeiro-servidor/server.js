const express = require("express")
const app = express()

app.get("/",(request,response)=>{
    response.status(200).json(["Funcionou o get"])
})
app.get("/hello",(request,response)=>{
    response.status(200).json(["Oi rota hello!"])
})
app.listen(8080,() =>{
    console.log("Está Funcionando o servidor")
})

