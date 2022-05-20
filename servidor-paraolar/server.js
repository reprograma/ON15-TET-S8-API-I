
const filmesJson = require("./data/filmes.json")
const seriesJson = require("./data/series.json")

const express = require("express")
const app = express()

const cors = require("cors")

const PORT = 4040

//1 - rota de mensagem 
app.get("/", (request, response) => {
    response.status(200).json([
        {
            "mensagem": "API de filmes e séries Ghibli!"
        }
    ])
})

//2 - rota de filmes
app.get("/filmes", (request, response) => {
    response.status(200).send(filmesJson)
})

//3 - rota do id filme selecionado
app.get("/filmes/buscar/:id", (request, response) => {

    let idRequest = request.params.id

    let filmeEncontrado = filmesJson.find(filme => filme.id == idRequest)

    response.status(200).send(filmeEncontrado)
})

app.use(express.json())

//filmes por título
app.get("/filmes/filtro", (request, response) => {

    let tituloRequest = request.query.titulo.toLowerCase()

    let filmeEncontrado = filmesJson.filter(filme => filme.Title.toLowerCase().includes(tituloRequest))

    response.status(200).send(filmeEncontrado)
})

//cadastrar filmes
app.post("/filmes/cadastrar", (request, response) => {
    let bodyRequest = request.body

    let novoFilme = {
        "id": (filmesJson.length) + 1,
        "Title": bodyRequest.Title,
        "Year": bodyRequest.Year,
        "Rated": bodyRequest.Rated,
        "Released": bodyRequest.Released,
        "Runtime": bodyRequest.Runtime,
        "Genre": bodyRequest.Genre,
        "Director": bodyRequest.Director,
        "Writer": bodyRequest.Writer,
        "Actors": bodyRequest.Actors,
        "Plot": bodyRequest.Plot,
        "Language": bodyRequest.Language,
        "Country": bodyRequest.Country,
        "Awards": bodyRequest.Awards
    }
    filmesJson.push(novoFilme)

    response.status(201).send({
        "mensagem": "Filme cadastrado com sucesso!",
        novoFilme
    })
})


//4 - rota de séries
app.get("/series", (request, response) => {
    response.status(200).send(seriesJson)
})

//5 - rota do id séries selecionadas
app.get("/series/buscar/:id", (request, response) => {

    let idRequest = request.params.id

    let serieEncontrada = seriesJson.find(serie => serie.id == idRequest)

    response.status(200).send(serieEncontrada)

})

app.use(express.json())

//séries por título
app.get("/series/filtro", (request, response) => {
    let tituloRequest = request.query.titulo.toLowerCase()

    let serieEncontrada = seriesJson.filter(serie => serie.title.toLowerCase().includes(tituloRequest))

    response.status(200).send(serieEncontrada)

})

//cadastrar séries
app.post("/series/cadastrar", (request, response) => {
    let bodyRequest = request.body

    let novaSerie = {
        "id": (seriesJson.length) + 1,
        "title": bodyRequest.title,
        "totalSeasons": bodyRequest.totalSeasons,
        "genre": bodyRequest.genre,
        "writers": bodyRequest.writers,
        "poster": bodyRequest.poster,
        "actors": bodyRequest.actors,
        "ratings": bodyRequest.ratings
    }
    seriesJson.push(novaSerie)

    response.status(201).send({
        "mensagem": "Série cadastrada com sucesso!",
        novaSerie,
    })


})

//porta
app.listen(PORT, () => {
    console.log(`API de filmes e séries rodando na porta ${PORT}`)
})


