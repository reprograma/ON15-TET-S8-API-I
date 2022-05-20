const filmesJson = require("./data/filmes.json")
const seriesJson = require("./data/series.json")

const express = require ("express") //importar express
const cors = require ("cors") //importar cors
const app = express() //executar express

app.use(cors()) //usar o cors
app.use(express.json()) //usar o bodyparser

//criar rota principal
app.get("/", (request, response) =>{
    response.status(200).json([
        {
            "mensagem": "API de Filmes e Séries - Ana Elisa Alexandre - On 15 {reprograma}"
        }
    ])
})

//criar rota p/ buscar todos os filmes
app.get("/filmes", (request, response) => {
    response.status(200).send(filmesJson)
})

//criar rota p/ buscar todas as séries
app.get("/series",(request, response) => {
    response.status(200).send(seriesJson)
})

//criar rota p/ buscar filmes pelo id
app.get("/filmes/buscar/:id", (request, response) => {
    let idFilmeRequest = request.params.id
    let filmeEncontrado = filmesJson.find(filme => filme.id == idFilmeRequest)

    response.status(200).send(filmeEncontrado)
})

//criar rota p/ buscar series pelo id
app.get("/series/buscar/:id", (request, response) => {
    let idSerieRequest = request.params.id
    let serieEncontrada = seriesJson.find(serie => serie.id == idSerieRequest)

    response.status(200).send(serieEncontrada)
})

app.get("/filmes/filtro", (request, response) => {
    let tituloFilmeRequest = request.query.titulo.toLowerCase()
    let tituloFilmeEncontrado = filmesJson.filter(filme => filme.title.toLowerCase().includes(tituloFilmeRequest))

    response.status(200).send(tituloFilmeEncontrado)
})

app.get("/series/filtro", (request, response) => {
    let tituloSerieRequest = request.query.titulo.toLowerCase()
    let tituloSerieEncontrada = seriesJson.filter(serie => serie.title.toLowerCase().includes(tituloSerieRequest))

    response.status(200).send(tituloSerieEncontrada)
})

//criar rota p/ cadastrar novos filmes
app.post("/filmes/cadastrar", (request, response) => {
    let bodyRequest = request.body 
    
    let novoFilme = {
        id: (filmesJson.length)+1,
        Title: bodyRequest.Title,
        Year: bodyRequest.Year,
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
        "mensagem": "Filme cadastrado com sucesso!",
        novoFilme
    })

})

//criar rota p/ cadastrar novas séries
app.post("/series/cadastrar", (request, response) => {
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
        "mensagem": "Série cadastrada com sucesso!",
        novaSerie
    })

})

app.listen(3500, () => {
    console.log("abrindo a portera 3500, a netflix delash")
})  