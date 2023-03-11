const express = require("express")
const app = express()

app.get("/", (request,response)=>{
    response.status(200).json(["salve, mundão"])
})

app.get("/ola", (request,response)=>{
    response.status(200).json(["oizinho"])
})

app.listen(9191, () => {
    console.log("meu servidor está rodando na porta 9191")
})