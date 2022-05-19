const filmesJson = require("./data/filmes.json")
const seriesJson = require("./data/series.json")
const express = require("express")

const cors = require("cors")
const app = express()

app.use(cors())
app.use(express.json())


app.get("/", (request, response) => {
    response.status(200).json([
        {
            "mensagem": "API filmes e séries."
        }
    ])
})

app.get("/filmes/buscar/:id", (request, response) => {
    let idFilmes = request.params.id

    let filmeEncontrado = filmesJson.find(filme => filme.id == idFilmes)
    response.status(200).send(filmeEncontrado)
})

app.get("/filmes", (request, response) => {
    response.status(200).send(filmesJson)
})

app.get("/series", (request, response) => {
    response.status(200).send(seriesJson)
})

app.get("/series/buscar/:id", (request, response) => {
    let idSeries = request.params.id

    let serieEncontrada = seriesJson.find(serie => serie.id == idSeries)
    response.status(200).send(serieEncontrada)
})


app.get("/filmes/filtro", (request, response) => {
    let titleRequest = request.query.title.toLowerCase()
    let titleEncontrado = filmesJson.filter(
        filmes => filmes.Title.toLowerCase().includes(titleRequest))

    response.status(200).send(titleEncontrado)

})


app.get("/series/filtro", (request, response) => {
    let titleRequest = request.query.title.toLowerCase()
    let titleEncontrado = seriesJson.filter(
        serie => serie.title.toLowerCase().includes(titleRequest))

    response.status(200).send(titleEncontrado)

})

app.post("/filmes/cadastrar", (request, response) => {
    let bodyRequest = request.body

    let novoFilme = {
        id: (filmesJson.length) + 1,
        title: bodyRequest.title,
        year: bodyRequest.year,
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
"Mensagem": "Filme cadastrado com sucesso! <3"


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
    "Mensagem": "Série cadastrada com sucesso! <3"
    

})
})

app.listen(9425, () => {
    console.log("Servidor rodando na porta 9425")
})



