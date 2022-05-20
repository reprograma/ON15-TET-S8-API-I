const filmesJson = require("./data/filmes.json")

const express = require("express");
const cors = require("cors")

const app = express();
app.use(cors())
app.use(express.json())

app.get("/", (request, response) => {
    response.status(200).json([{
        "mensagem": "API de Filmes Para Maratonar "
    }])
})


app.get("/filmes", (request, response) => {
    response.status(200).send(filmesJson)
})

app.get("/filmes/busca/:id", (request, response) => {
    let idRequest = request.params.id
    let encontrarFilmes = filmesJson.find(filme => filme.id == idRequest)

    console.log(idRequest)
    console.log(encontrarFilmes)

    response.status(200).send(encontrarFilmes)
})

app.get("/filmes/busca/:title", (request, response) => {
    let titleRequest = request.params.title
    let encontrarFilmes = filmesJson.find(filme => filme.title == titleRequest)

    console.log(titleRequest)
    console.log(encontrarFilmes)

    response.status(200).send(encontrarFilmes)
})

app.post("/filmes/cadastrar", (request, response) => {
    let bodyRequest = request.body
    console.log(bodyRequest)

    let filmeNovo = {
        id: (filmesJson.length) + 1,
        title: bodyRequest.title,
        description: bodyRequest.description

    }
    filmesJson.push(filmeNovo)
    response.status(201).send({
        "mensagem": "Filmes cadastrado com sucesso ",
        filmeNovo
    })

})

app.listen(6070, () => {
    console.log("Utilizando a porta 6070")
})
console.log( ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** * )
const filmesJson = require("./data/filmes.json")

const express = require("express");
const cors = require("cors")

const app = express();
app.use(cors())
app.use(express.json())

app.get("/", (request, response) => {
    response.status(200).json([{
        "mensagem": "API de Séries Para Maratonar "
    }])
})


app.get("/series", (request, response) => {
    response.status(200).send(seriesJson)
})

app.get("/series/busca/:id", (request, response) => {
    let idRequest = request.params.id
    let encontrarSeries = seriesJson.find(serie => serie.id == idRequest)

    console.log(idRequest)
    console.log(encontrarSeries)

    response.status(200).send(encontrarSeries)
})

app.get("/filmes/busca/:title", (request, response) => {
    let titleRequest = request.params.title
    let encontrarSeries = seriesJson.find(serie => serie.title == titleRequest)

    console.log(serieRequest)
    console.log(encontrarSeries)

    response.status(200).send(encontrarSeries)
})

app.post("/series/cadastrar", (request, response) => {
    let bodyRequest = request.body
    console.log(bodyRequest)

    let serieNovo = {
        id: (seriesJson.length) + 1,
        title: bodyRequest.title,
        description: bodyRequest.description

    }
    seriesJson.push(serieNovo)
    response.status(201).send({
        "mensagem": "Séries cadastradas com sucesso ",
        serieNovo
    })

})

app.listen(6080, () => {
            console.log("Utilizando a porta 6080")
  
  
