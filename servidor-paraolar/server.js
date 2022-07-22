const filmesJson = require ("./data/filmes.json") 
const seriesJson = require ("./data/series.json")
const express = require ("express")
const cors = require("cors")
const app = express()

app.use(cors())
app.use (express.json()) 


app.get ("/", (request, response)=> {
    response.status(200).json([
        {
            "mensagem":"API de filmes e series"
        }
    ])
})

app.get ("/filmes", (request, response)=>{
    response.status(200).send(filmesJson) 

})


app.get("/filmes/buscar/:id", (request, response)=>{
    let idRequest = request.params.id
    let filmeEncontrado = filmesJson.find(filme => filme.id == idRequest)
    response.status(200).send(filmeEncontrado) 
}) 


app.get("/filmes/titulo", (request, response) => {

    let tituloFilmeRequest = request.query.title.toLowerCase()
    let tituloFilmeEncontrado = filmesJson.filter(filme => filme.title.toLowerCase().includes(tituloFilmeRequest))

    response.status(200).send(tituloFilmeEncontrado)
})


app.post("/filmes/cadastrar", (request, response)=>{
    let bodyRequest= request.body

    let novoFilme = {
        id: (filmesJson.lenght)+1,
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

        "mensagem":"Filme cadastrado!"
    })
})


app.get ("/series", (request, response)=>{
    response.status(200).send(seriesJson) 

})


app.get("/series/buscar/:id", (request, response)=>{
    let idRequest = request.params.id
    let serieEncontrada = seriesJson.find(serie => serie.id == idRequest)
    response.status(200).send(serieEncontrada) 
}) 


app.get("/filmes/buscar/titulo", (request, response) => {

    let tituloSerieRequest = request.query.title.toLowerCase()
    let tituloSerieEncontrada = seriesJson.filter(serie => serie.title.toLowerCase().includes(tituloSerieRequest))

    response.status(200).send(tituloSerieEncontrada)
})


app.post("/series/cadastrar", (request, response)=>{
    let bodyRequest= request.body

    let novaSerie = {
        id: (seriesJson.lenght)+1,
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
        "mensagem":"Serie cadastrada!"
    })
})



app.listen (8787, () => {
    console.log(`Server rodando na porta 8787`)
})
  
  