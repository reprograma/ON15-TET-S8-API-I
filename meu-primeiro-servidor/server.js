const express = require("express")
const app = express()

app.get("/", (request, response)=> {
response.status(200).json(["salve, mundao"])
})

app.get("/ola" , (request, response) => {
    response.status(200).json(["oi xuxuzinho"])
})


app.listen(8080, ()=> {
    console.log("Meu servidor tá rodando na porta 8080, graças a deus")
})