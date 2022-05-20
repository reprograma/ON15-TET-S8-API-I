const filmesJson = require("./data/filme.json")
const serieJson = require("./data/series.json")

const express = require("express")
const app = express()
const cors = require("cors")

app.use(cors())
app.use(express.json())

app.get("/", (request, response) => {
    response.status(200).json([
        {
            "mensagem": "Busque seu filme e sua série"
        }
    ])
})

app.get("/filmes", (request, response)=> {
    response.status(200).send(filmeJson)
})

app.get("/series", (request, response)=> {
    response.status(200).send(serieJson)
})

app.get("/filmes/buscar/:id", (request, response)=> {
    let idRequest = request.params.id

    let filmeEncontrado = filmesJson.find(filme => filme.id == idRequest)
    response.status(200).send(filmeEncontrado)
})
// tentar trocar :id por nome.
app.get("/series/buscar/:id", (request, response)=> {
    let nomeRequest = request.params.id

    let serieEncontrada = serieJson.find(serie => serie.id == idRequest)
    response.status(200).send(serieEncontrada)
})

app.get("/filmes/filtro", (request, response)=> {
    let titleRequest = request.query.title.toLowerCase()

    let titleEncontrado = filmesJson.filter(
        filme => filme.title.toLowerCase().includes(titleRequest)
    )
    response.status(200).send(titleEncontrado)
})

app.get("/series/filtro", (request, response)=> {
    let titleRequest = request.query.title.toLowerCase()

    let titleEncontrado = serieJson.filter(
        serie => serie.title.toLowerCase().includes(titleRequest)
    )
    response.status(200).send(titleEncontrado)
})

app.post("/filmes/cadastrar", (request, response)=> {
    let bodyRequest = request.body

    let novoFilme = {
        id: (filmeJson.length)+1,
        Title: bodyRequest.Title,
        Year: bodyRequest.Year,
        Rated: bodyRequest.Rated,
        Released: bodyRequest.Released,
        Runtime: bodyRequest.Runtime,
        Genre: bodyRequest.Genre,
        Director: bodyRequest.Director,
        Writer: bodyRequest.Writer,
        Actors: bodyRequest.Actors,
        Plot: bodyRequest.Plot,
        Language: bodyRequest.Language,
        Country: bodyRequest.Country,
        Awards: bodyRequest.Awards
    }
    filmesJson.push(novoFilme)

    response.status(201).send({
        "mensagem": "filme cadastrado com sucesso",
        novoFilme
    })
})

app.post("/series/cadastrar", (request, response)=> {
    let bodyRequest = request.body

    let novaSerie = {
        id: (serieJson.length)+1,
        title: bodyRequest.title,
        totalSeasons: bodyRequest.totalSeasons,
        genre: bodyRequest.genre,
        writers: bodyRequest.writers,
        poster: bodyRequest.Actors,
        ratings: bodyRequest.ratings
    }
    serieJson.push(novaSerie)

    response.status(201).send({
        "mensagem": "série cadastrada com sucesso",
        novaSerie
    })
})

app.listen (3939, ()=> {
    console.log(`O servidor está rodando na porta 3939`)
})