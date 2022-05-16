const filmes = require("./data/ghibli.json")

const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (request, response) => {
    response.status(200).json([
        {
            "mensagem": "API de filmes Ghibli ON15"
        }
    ])
})

app.get("/filmes", (request, response) => {
    response.status(200).send(filmes)
})

app.get("/filmes/buscar/:id", (request, response) => {
    let idRequest = request.params.id

    let filmeEncontrado = filmes.find(filme => filme.id == idRequest)
    response.status(200).send(filmeEncontrado)
    
})

app.get("/filmes/filtro", (request, response) => {
    let nomeRequest = request.query.titulo.toLocaleLowerCase()

    let filmeEncontrado = filmes.filter(filme => filme.title.toLowerCase().includes(nomeRequest))
    response.status(200).send(filmeEncontrado)
})

app.post("/filmes/cadastrar", (request, response) => {
    let bodyRequest = request.body
    let novoFilme = {
        id: (filmes.length)+1,
        title: bodyRequest.title,
        description: bodyRequest.description

    }

    filmes.push(novoFilme)
    response.status(201).send({
        "mensagem": "Filme cadastrado com sucesso",
        novoFilme
    })
})

app.listen(8099, () => {
    console.log(" TOC TOC! Quem bate? É a porta! Que porta? A Porta 8099")
}) 