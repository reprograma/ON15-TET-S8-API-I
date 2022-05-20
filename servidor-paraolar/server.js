const filmesJson = require("./data/filmes.json")
const seriesJson = require("./data/series.json")

const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())


app.get("/", (request, response)=>{
    response.status(200).json([
        {
            "mensagem" : "busca de filmes e séries"
        }
    ])
})

app.get("/filmes", (request, response)=>{
    response.status(200).send(filmesJson)
})

app.get("/filmes/buscar/:id", (request, response)=>{
    let idRequest = request.params.id
    let filmeEncontrado = filmesJson.find(filme => filme.id == idRequest)
    
    response.status(200).send(filmeEncontrado)
})

app.get("/series/buscar/:id", (request, response)=>{
    let idRequest = request.params.id
    let serieEncontrada = seriesJson.find(serie => serie.id == idRequest)

    response.status(200).send(serieEncontrada)
})

app.get("/filmes/filtro", (request, response)=>{
    let titleRequest = request.query.title.toLowerCase()

    let titleEncontrado = filmesJson.filter(
        filme => filme.Title.toLowerCase().includes(titleRequest))

    response.status(200).send(titleEncontrado)
})

app.get("/series/filtro", (request, response)=>{
    let titleRequest = request.query.title.toLowerCase()

    let titleEncontrado = seriesJson.filter(
        serie => serie.title.toLowerCase().includes(titleRequest))
    
    response.status(200).send(titleEncontrado)
})



app.post("/filmes/cadastrar", (request, response)=>{
    let bodyRequest = request.body
    let novoFilme = {
        id: (filmesJson.length)+1,
        Title: bodyRequest.Title,
        Year: bodyRequest.Year,
        Rated: bodyRequest.Rated,
        Released: bodyRequest.Eeleased,
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

app.post("/series/cadastrar", (request, response)=>{
    let bodyRequest = request.body
    let novaSerie = {
        id: (seriesJson.length)+1,
        title: bodyRequest.title,
        totalSeasons: bodyRequest.totalSeasons,
        genre: bodyRequest.genre,
        writers: bodyRequest.writers,
        poster: bodyRequest.poster,
        actors: bodyRequest.actors,
        ratings: bodyRequest.ratings
    }
    seriesJson.push(novaSerie)

    response.status(201).send({
        "mensagem": "série cadastrada com sucesso",
        novaSerie
    })
})

app.listen(9090, ()=>{
    console.log("meu primeiro servidor sozinha tá rodando na porta 9090, graças a deeeus")
})
  
  