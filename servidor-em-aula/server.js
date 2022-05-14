const filmesJson = require("./data/ghibli.json")

const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())
app.use(express.json()) //fazendo o parse do body

app.get("/", (request, response) => {
    response.status(200).json([
        {
            "mensagem": "API de Filmes Ghibli da Turma On15"
        }
    ])
})

app.get("/filmes", (request, response) => {
    response.status(200).send(filmesJson)
})

app.get("/filmes/buscar/:id", (request, response) => {
    //recuperando o valor do id enviado na request
    let idRequest = request.params.id

    //array.find(elemento => comparação)
    //encontre um filme dentro do filmesJson que o id do filme seja igual ao id do request
    let filmeEncontrado = filmesJson.find(filme => filme.id == idRequest)

    response.status(200).send(filmeEncontrado)
})

app.get("/filmes/buscar/:nome", (request, response) => {
    let nomeRequest = request.params.title
    let nomeEncontrado = filmesJson.find(filme => filme.title == nomeRequest)

    response.status(200).send(nomeEncontrado)
})

app.post("/filmes/cadastrar", (request, response) => {
    let bodyRequest = request.body //pegar informação adicionada no body
    
    let novoFilme = {
        id: (filmesJson.length)+1, //para que seja acrescentado em sequência
        title: bodyRequest.title,
        description: bodyRequest.description
    }
    filmesJson.push(novoFilme)

    response.status(201).send({
        "mensagem": "Filme cadastrado com sucesso!",
        novoFilme
    })

})

app.listen(4040, () => {
    console.log("abrindo a portera 4040")
})