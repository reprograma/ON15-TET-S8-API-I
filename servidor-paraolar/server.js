const filmesJson = require("./data/filmes.json")
const seriesJson = require("./data/series.json")
const express = require("express")
const app = express()
const cors = require("cors")
app.use(cors())
app.use(express.json())

app.get("/", (request, response)=>{
    response.status(200).json([
        {
            "mensagem": "Api de séries e filmes bem lindas pra você!"
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

app.get("/filmes/porNome", (request, response)=>{
    let nomeRequest = request.query.titulo.toLowerCase()
    let filmeEncontrado = filmesJson.filter(filme => filme.Title.toLowerCase().includes(nomeRequest)) 

    response.status(200).send(filmeEncontrado)
})


app.get("/series", (request, response)=>{
    response.status(200).send(seriesJson)
})


app.get("/series/buscar/:id", (request, response)=>{
    let idRequest = request.params.id
    let filmeEncontrado = seriesJson.find(serie => serie.id == idRequest) 

    response.status(200).send(filmeEncontrado)
})

app.get("/series/porNome", (request, response)=>{
    let nomeRequest = request.query.titulo.toLowerCase()
    let filmeEncontrado = seriesJson.filter(serie => serie.title.toLowerCase().includes(nomeRequest)) 

    response.status(200).send(filmeEncontrado)
})

app.post("/filmes/criar", (request, response)=>{
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
        "mensagem":"Novo filme cadastrado com sucesso",
        novoFilme
    })


})

app.post("/series/criar", (request, response)=>{
    let bodyRequest = request.body
    let novaSerie = {
        id: (seriesJson.length) +1,
        title: bodyRequest.title,
        totalSeasons: bodyRequest.totalSeasons,
        genre: bodyRequest.genre.split(","),
        writers: bodyRequest.writers.split(","),
        poster: bodyRequest.poster,
        actors: bodyRequest.actors.split(","),
        ratings: {
            rating: bodyRequest.rating,
            likes: bodyRequest.likes
        }, 
               
    }

    seriesJson.push(novaSerie)
    response.status(201).send({
        "mensagem":"Nova série cadastrada com sucesso",
        novaSerie
    })

})

app.listen(4085, () =>{
    console.log("Porta 4085 criada")
})


  
  