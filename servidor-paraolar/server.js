const filmesJson = require("./data/filmes.json")
const seriesJson = require("./data/series.json")


const express = require("express")
const app = express()

app.get("/", (request, response)=>{
    response.status(200) .json([
     {
         "mensagem": "API de filmes e series"
     } 

    ])
})

const cors = require ("cors")

app.use(express.json())
app.use(cors ())


app.get("/filmes", (request, response)=>{
    response.status(200). send(filmesJson)
})


app.get("/Filmes/buscar/:id", (request,response)=>{
   let idRequest = request.params.id
   let filmeEcontrado = filmesJson.find(filmes => filmes.id == idRequest)

   response.status(200) .send(filmeEcontrado)
})

app.get("/filmes/filtro", (request, response) => {
    let nomeRequest = request.query.titulo.toLocaleLowerCase()
    let filmesEncontrado = filmesJson.filter(filmes => filmes.Title.toLowerCase().includes(nomeRequest))

    response.status(200).send(filmesEncontrado)
})

app.post("/filmes/cadastrar", (request, response)=>{
    let bodyRequest = request.body

    let novoFilme = {
        id:(filmesJson.length)+1,
        Title:bodyRequest.Title,
        Year: bodyRequest.Year,
        Rated:bodyRequest.Rated,
        Release:bodyRequest.Release,
        Runtimed:bodyRequest.Runtimed,
        Genre:bodyRequest.Genre,
        Director:bodyRequest.Director,
        Writer:bodyRequest.Writer,
        Actors:bodyRequest.Actors,
        Plot:bodyRequest.Plot,
        Language:bodyRequest.Language,
        Country:bodyRequest.Country,
        Awards:bodyRequest.Awards
}
    filmesJson.push(novoFilme)

    response.status(201).send({
   "mensagem": "filmes cadastrado",
    novoFilme

    })
       
})

app.get("/series", (request, response)=>{
    response.status(200). send(seriesJson)

})

app.get("/series/buscar/:id", (request,response)=>{
    let idRequest = request.params.id
    let serieEncontrado = seriesJson.find(series => series.id == idRequest)
    response.status(200).send(filmesEncontrado)
})

app.get("/series/buscarNome", (request, response) => {
    let nomeRequest = request.query.title.toLowerCase()
    let serieEncontrada = seriesJson.filter(serie => serie.title.toLowerCase().includes(nomeRequest))
    
    response.status(200).send(serieEncontrada)

    
})

app.post("/series/cadastrar", (request, response)=>{
    let bodyRequest = request.body 

    let novaSerie = {
        id:(seriesJson.length)+1,
        title:bodyRequest.title,
        totalSeasons: bodyRequest.totalSeasons,
        genre: bodyRequest.genre,
        writers: bodyRequest.writer,
        poster: bodyRequest.poster,
        actors: bodyRequest.actors,
        ratings: bodyRequest.ratings,
     
    }
    seriesJson.push(novaSerie)

    response.status(201).send({
   "mensagem": "serie cadastrada",
    novaSerie

    })
})

app.listen(3436, ()=>{
    console.log("meu servidor esta rodando na porta 3436")
})

  
  