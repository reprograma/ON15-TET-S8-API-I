//chamando o express
const express = require("express")
//executando o express e guardando na variável app
const app = express()

//CRIANDO ROTA
//o express possui uma função para construir um GET, recebe como parâmetros uma rota e uma arrow function request e response/ req e res/ requisição e resposta
app.get("/", (request, response) => {
//configurando a reposta
//status 200 quer dizer que tá tudo bem
    response.status(200).json(["salve, mundão"])
})

//criando outra rota
app.get("/ola", (request, response) => {
    response.status(200).json(["oizinho"])
})

//nosso computador vai ser o local host e a porta vamos configurar
//número da porta tem que ser acima de 3000 pq normalmente o que tem abaixo de 3000 já tá sendo usado pelo nosso próprio computador
//função listen do express permite a criação de porta
app.listen(8080, () => {
    console.log("meu servidor tá rodando na porta 8080")
})

//no terminal vou ter que fazer um comando pra iniciar: npm start



