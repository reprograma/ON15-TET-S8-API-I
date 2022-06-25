const filmesJson = require ("./data/filmes.json") 
const seriesJson = require ("./data/series.json")

const express = require ("express")
const { response, request } = require("express")
const app = express()
const cors = require("cors")  

app.use (express.json())
app.use(cors())


app.get("/",(request, response) =>{
    response.status(200).json([
        {
            "mensagem": "API de filmes On15 rodando."
        }
    ])
})

app.get("/filmes", (request, response) => {
  response.status(200).send(filmesJson)
 
})

app.get("/series", (request, response) => {
    response.status(200).send(seriesJson)
  })


  // "/filmes/buscar/:id"    // "/series/buscar/:id"


 // filmes rodou
  app.get("/filmes/buscar/:id",(request, response) =>{
    let idRequest = request.params.id
    let filmesEncontrado = filmesJson.find(filmes => filmes.id == idRequest)
    response.status(200).send(filmesEncontrado)

})    

 //serie rodou
app.get("/series/buscar/:id",(request, response) =>{
    let idRequest = request.params.id
    let seriesEncontrada = seriesJson.find(series => series.id == idRequest)
    response.status(200).send(seriesEncontrada)     
})

/// "/filmes/buscar/:nome" - retorna o filme com nome selecionado


// filme rodou
app.get("/filmes/filtro", (request, response) => {
    let tituloRequest = request.query.titulo.toLowerCase()
    
    let filmeEncontrado = filmesJson.filter(
        filmes => filmes.Title.toLowerCase().includes(tituloRequest))

    response.status(200).send(filmeEncontrado)
})


// serie rodou
app.get("/series/filtro", (request, response)=>{
    let tituloRequest = request.query.titulo.toLowerCase()

    let seriesEncontrada = seriesJson.filter(
        series => series.title.toLowerCase().includes(tituloRequest))

    response.status(200).send(seriesEncontrada)
        
        
})

// filme cadastrou rodou
app.post("/filmes/cadastrar", (request, response) => {
    let bodyRequest = request.body
    console.log(filmesJson.length)
    let novoFilme = {
        
        id:(filmesJson.length)+1,
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
        
        "mensagem": "Filme cadastrado com sucesso",
        novoFilme
        
    })


})


//  Cadastrar uma nova Serie - Rodou perfeitamente

app.post("/series/cadastrar",(request, response)=>{
    let bodyRequest = request.body

    let novaSerie = {

        id:(seriesJson.length) +1,
        title: bodyRequest.title,
        totalSeasons: bodyRequest.totalSeasons,
        genre: bodyRequest.genre,
        writers: bodyRequest.writers,
        poster: bodyRequest.poster,
        actors: bodyRequest.actors,
        ratings: bodyRequest.ratings,
        rating: bodyRequest.rating,
        likes: bodyRequest.likes

    }

    seriesJson.push(novaSerie)
    response.status(201).send({
        
        "mensagem": "Filme cadastrado com sucesso",
        novaSerie
        
    })

})

app.listen (8989,()=>{
    console.log("servidor rodando perfeitamente na porta 8989")
})
