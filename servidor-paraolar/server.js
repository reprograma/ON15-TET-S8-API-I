const seriesJson = require("./data/series.json")
const filmesJson = require("./data/filmes.json")

const express = require("express")
const app = express()
const PORT = 6931

const cors = require("cors")

app.use(cors())
app.use(express.json())


// mostrando todas as series

app.get("/series", (request, response)=>{

response.status(200).json(seriesJson)

})

// buscando series por id

app.get("/series/buscar/:id", (request, response)=>{

let idRequest = request.params.id
let serieEncontrada = seriesJson.find(serie => serie.id == idRequest)
response.status(200).json(serieEncontrada)


})

//buscando series por titulo

app.get("/series/filtro", (request, response)=>{

    let tituloRequest = request.query.titulo.toLowerCase()
    let serieEncontrada = seriesJson.filter(serie => serie.title.toLowerCase().includes(tituloRequest))

    response.status(200).json(serieEncontrada)


})

//cadastrando series

app.post("/series/cadastrar", (request, response)=>{

let bodyRequest = request.body

let novaSerie = {

    id: (seriesJson.length) +1, 
    title: bodyRequest.title,
    totalSeasons: bodyRequest.totalSeasons ,
    genre: bodyRequest.genre
}

seriesJson.push(novaSerie)
response.status(201).json({

    mensagem: "A série foi cadastrada!", novaSerie
})


})


//mostrando todos os filmes

app.get("/filmes", (request, response)=>{

response.status(200).json(filmesJson)

})

//buscando filmes por id

app.get("/filmes/buscar/:id", (request, response)=>{
let idRequest = request.params.id
let filmeEncontrado = filmesJson.find(filme => filme.id == idRequest)
response.status(200).json(filmeEncontrado)



})

//buscando filmes por titulo

app.get("/filmes/filtro", (request, response)=>{

let tituloRequest = request.query.titulo.toLowerCase()

let filmeEncontrado = filmesJson.filter(filme => filme.Title.toLowerCase().includes(tituloRequest))

response.status(200).json(filmeEncontrado)


})

//cadastrando filmes

app.post("/filmes/cadastrar", (request, response)=>{

let bodyRequest = request.body

let novoFilme = {
    id: (filmesJson.length)+1,
    Title: bodyRequest.Title,
    Year: bodyRequest.Year,
    Rated: bodyRequest.Rated,
    Released:bodyRequest.Released,
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
response.status(201).json({

    mensagem: "O filme foi cadastrado com sucesso!",
    novoFilme
})


})

app.listen(PORT, ()=>{

console.log(`O servidor está rodando na porta ${PORT}`)

})