const express = require("express") //requerindo o express
const app = express() //executar o express para usar as funções

app.get("/", (request, response) => {
    response.status(200).json(["eaí galera"])
}) //callback

app.get("/ola", (request, response) => {
    response.status(200).json(["teste oi"])
})//enviar um get com rota "/rota", com request e response, no response tem um json com infos

app.listen(8080, () => {
    console.log("meu servidor tá rodando na porta 8080")
}) //configurar uma porta: no parametro cria uma porta com numero acima de 3000 e uma arrow function
