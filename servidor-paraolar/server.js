const express = require('express')
const cors = require('cors')
const app = express()
const filmesJson = require("./data/filmes.json")
const seriesJson = require("./data/series.json")
app.use(cors())
app.use(express.json())
app.listen(8080,()=>{ console.log("Servidor rodando na Porta 8080")})
  

app.get("/",(request,response)=>{
    response.status(200).send(`API DE FILMES E SERIES!`)})
  

//ROTAS PARA FILME 

app.get("/filmes",(request,response)=>{
    response.status(200).send(filmesJson)
})

app.get("/filmes/buscar/:id",(request,response)=>{
    let idrequest = request.params.id
    let filmeEncontrado = filmesJson.find(filme => filme.id == idrequest)
    response.status(200).send(filmeEncontrado)
})
app.get("/filmes/buscar",(request,response)=>{
    let titlerequest = (request.query.Title).toLowerCase()
    let filmeEncontrado = filmesJson.filter(filme =>  filme.Title.toLowerCase().includes(titlerequest))
    response.status(200).send(filmeEncontrado)
})
app.post("/filmes/inserir",(request,response)=>{
    let bodyRequest = request.body
    let filmeNovo = {
        id:(filmesJson.length)+1,
        Title:bodyRequest.Title,
        Year:bodyRequest.Year,
        Rated:bodyRequest.Rated,
        Released:bodyRequest.Released,
        Runtime:bodyRequest.Runtime,
        Genre:bodyRequest.Genre,
        Director:bodyRequest.Director,
        Writer:bodyRequest.Writer,
        Actors:bodyRequest.Actors,
        Plot:bodyRequest.Plot,
        Language:bodyRequest.Language,
        Country:bodyRequest.Country,
        Awards:bodyRequest.Awards
    }
    filmesJson.push(filmeNovo)
    response.status(201).send("Filme adicionado com sucesso!")
})

//ROTAS PARA SERIE 

app.get("/series",(request,response)=>{
    response.status(200).send(seriesJson)
})

app.get("/series/buscar/:id",(request,response)=>{
    let idrequest = request.params.id
    let serieEncontrada = seriesJson.find(serie => serie.id == idrequest)
    response.status(200).send(serieEncontrada)
})
app.get("/series/buscar",(request,response)=>{
    let titlerequest = (request.query.title).toLowerCase()
    let serieEncontrada = seriesJson.filter(filme =>  filme.title.toLowerCase().includes(titlerequest))
    response.status(200).send(serieEncontrada)
})
app.post("/series/inserir",(request,response)=>{
    let bodyRequest = request.body
    let filmeNovo = {
        id:(seriesJson.length)+1,
        title:bodyRequest.title,
        totalSeasons:bodyRequest.totalSeasons,
        genre:bodyRequest.genre,
        writers:bodyRequest.writers,
        poster:bodyRequest.poster,
        actors:bodyRequest.actors,
        ratings:bodyRequest.ratings,

    }
    seriesJson.push(filmeNovo)
    response.status(201).send("Filme adicionado com sucesso!")
})