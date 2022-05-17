const express = require("express")
const app = express()

app.get("/", (request, response) => {
    response.status(200).json(["Estou Aqui!"])
})
app.get("/cheguei", (request, response) => {
    response.status(200).json(["Olá, cheguei aqui?"])
})
app.listen(7080, () => {
    console.log("meu servidor está rodando na porta 7080")
})