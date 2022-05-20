const filmesJson = require("./data/filmes.json")
const seriesJson = require("./data/series.json") 
const express = require("express")
const app = express()
const cors = require("cors")

app.use(cors())
app.use(express.json())
 
app.get("/", (resquest, response)=>{
    response.status(200).json([
        {
            "mensagem":"API de filmes e séries para você maratonar sem culpa"
        }
    ])
})

app.get("/filmes", (request, response)=>{
    response.status(200).send(filmesJson)
})

app.get("/series", (request,response)=>{
    response.status(200).send(seriesJson)
})

app.get("/filmes/buscar/:id", (request, response)=>{
    let idRequest = request.params.id
    let filmeEncontrado = filmesJson.find(filme => filme.id == idRequest)
    response.status(200).send(filmeEncontrado)
})

app.get("/series/buscar/:id", (request, response)=>{
    let idRequest = request.params.id
    let serieEncontrada = seriesJson.find(filme => filme.id == idRequest)

    response.status(200).send(serieEncontrada)
})

app.get("/filmes/buscartitulo", (request, response)=>{
    let tituloRequest = request.query.titulo.toLowerCase()
    let filmeEncontrado = filmesJson.filter(filme => filme.Title.toLowerCase().includes(tituloRequest))

    response.status(200).send(filmeEncontrado)
})

app.get("/series/buscartitulo", (request, response)=>{
    let tituloRequest = request.query.titulo.toLowerCase()
    let serieEncontrada = seriesJson.filter(serie => serie.title.toLowerCase().includes(tituloRequest))

    response.status(200).send(serieEncontrada)
})

app.post("/filmes/cadastrar", (request, response)=>{
    let bodyRequest = request.body
    let novoFilme = {
    id: (filmesJson.length)+1,
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
        "mensagem": "Um novo filme foi cadastrado com sucesso", 
        novoFilme

    })
})

app.post("/series/cadastrar", (request, response)=>{
    let bodyRequest = request.body
    let novaSerie = {
        id: (seriesJson.length) + 1,
        title: bodyRequest.title,
        totalSeasons: bodyRequest.totalSeasons,
        genre: bodyRequest.genre.split(","),
        writers: bodyRequest.writers.split(","),
        poster: bodyRequest.poster,
        actors: bodyRequest.actors.split(","),
        ratings: {
            rating: bodyRequest.rating,
            likes: bodyRequest.likes
        }
    }
    
    seriesJson.push(novaSerie)
    response.status(201).send({
        "mensagem": "Uma nova série foi cadastrada com sucesso", 
        novaSerie

    })
})

app.listen(4040, ()=>{
    console.log("Underererê, a porta 4040 tá gerando ")
})