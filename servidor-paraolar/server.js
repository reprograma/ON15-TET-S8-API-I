//  Resolução exercício filmes

const filmesJson = require("./data/filmes.json")


const express = require("express")
const cors = require("cors")


const app = express()


app.use(express.json())
app.use(cors())


app.get("/filmes", (request, response) => {
    response.status(200).send(filmesJson)
    
})


app.get("/filmes/buscar/:id", (request, response) => {

    let idRequest = request.params.id

    let filmeEncontrado = filmesJson.find(filme => filme.id == idRequest)

    response.status(200).send(filmeEncontrado)   
    
})


app.get("/filmes/encontrar",(request, response) => {

    let nomeRequest = request.query.Title.toLowerCase()

    let burcarFilme = filmesJson.filter(filmes => filmes.Title.toLowerCase().includes(nomeRequest))

    response.status(200).send(burcarFilme)
})


app.get("/filmes/buscar/:nome",(request, response) => {

    let nomeRequest = request.params.Title

    let burcarFilme = filmesJson.filter(filmes => {
        if (filmes.Title == nomeRequest){
            response.status(200).send(burcarFilme)

        }else{
            response.status(400)
        }
    
  })

})


app.post("/filmes/cadastrar", (request, response) => {

    let bodyRequest = request.body

    let novoFilme = {
        
        "id": bodyRequest.id,
        "Title":bodyRequest.Title,
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
        "mensagem": "Filmes cadastrado com sucesso",
        filmesJson
    })
})



app.listen(8060, () =>{
    console.log("meu servidor está rodando na porta 8060")
}) 



//  Resolução exercício serie



const seriesJson = require("./data/series.json")   


const express = require("express")   
const cors = require("cors")        


const app = express()

app.use(express.json())
app.use(cors())

app.get("/series", (request, response) => {
    response.status(200).send(seriesJson)
})


app.get("/series/buscar/:id", (request, response) => {
    let idRequest = request.params.id

    let serieEncontrado = seriesJson.find(filme => filme.id == idRequest)

    response.status(200).send(serieEncontrado)    
})

app.get("/series/encontrar",(request, response) => {

    let nomeRequest = request.query.title.toLowerCase()

    let burcarserie = seriesJson.filter(series => series.title.toLowerCase().includes(nomeRequest))

    response.status(200).send(burcarserie)


})


app.post("/series/cadastrar", (request, response) => {
    
    let bodyRequest = request.body

    let novaSerie = {

        id: bodyRequest.id,
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
        "mensagem": "Filmes cadastrado com sucesso",
        seriesJson
    })
})



app.listen(5050, () =>{
    console.log("meu servidor está rodando na porta 5050")
}) 
  