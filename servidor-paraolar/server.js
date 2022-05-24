const filmesDb = require("./data/filmes.json")
const seriesDb = require("./data/series.json")

const express = require("express")
const cors = require("cors")

const app =express()
app.use(express.json())
app.use(cors())

app.get("/", (request, response) => {
response.status(200).json({
    "mensagem": " Bem vindo, aqui você tem acesso aos melhores filmes e séries"
})
})

app.get("/filmes/buscar", (request , response) => {
    // const listarFilmes = filmesDb.find()// nao precisa bsucar 
    response.status(200).json({
        "Mensagem": " Lista de todos os filmes disponíveis",
        filmesDb 
    })
})

app.get("/filmes/buscar/:id", (request,response) => {
    const idRequest = request.params.id
    const buscarFilme = filmesDb.find(filmes => filmes.id == idRequest)

    response.status(200).json({
        "mensagem": " Este foi o filme encontrado",
        buscarFilme
    })
})

app.get("/filmes/encontrar", (request, response) => {
    const buscarNome = request.query.titulo.toLowerCase()
    const filmeEncontrado = filmesDb.filter(filme => filme.Title.toLowerCase().includes(buscarNome))

    response.status(200).json ({
        "Mensagem": " O filme encontrado foi ",
        filmeEncontrado
    })
})
app.post("/filmes/cadastrar", (request, response) => {
    const cadastrarFilme = request.body
    const novoFilme = {    /// sempre criar objeto com chave 
        id: filmesDb.length + 1,
        Title: cadastrarFilme.Title,
        Year: cadastrarFilme.Year,
        Rated: cadastrarFilme.Rated,
        Released: cadastrarFilme.Released,
        Runtime: cadastrarFilme.Runtime,
        Genre: cadastrarFilme.Genre,
        Director: cadastrarFilme.Director,
        Writer: cadastrarFilme.Writer,
        Actor: cadastrarFilme.Actor,
        Plot: cadastrarFilme.Plot,
        Langauge: cadastrarFilme.Langauge,
        Country: cadastrarFilme.Country,
        Awards: cadastrarFilme.Awards


    }
    filmesDb.push(novoFilme)
    response.status(201).json({
        "Mensagem": " Filme cadastrado com sucesso",
        novoFilme

    })
})

app.get("/series/buscar", (request , response) => {
    // const listarFilmes = filmesDb.find()// nao precisa bsucar 
    response.status(200).json({
        "Mensagem": " Lista de todos os filmes disponíveis",
        seriesDb
    })
})

app.get("/series/buscar/:id", (request,response) => {
    const idRequest = request.params.id
    const buscarSerie = seriesDb.find(series => series.id == idRequest)

    response.status(200).json({
        "mensagem": " Este foi a serie  encontrada",
        buscarSerie
    })
})

app.get("/series/encontrar", (request, response) => {
    const buscarNome = request.query.titulo.toLowerCase()
    const serieEncontrada = seriesDb.filter(serie => serie.title.toLowerCase().includes(buscarNome))

    response.status(200).json ({
        "Mensagem": " a série encontrada foi ",
        serieEncontrada
    })
})
app.post("/series/cadastrar", (request, response) => {
    const cadastrarSerie = request.body
    const novaSerie = {    /// sempre criar objeto com chave 
        id: seriesDb.length + 1,
        title: cadastrarSerie.title,
        totalSeasons: cadastrarSerie.totalSeasons,
        genre: cadastrarSerie.genre

    }
    seriesDb.push(novaSerie)
    response.status(201).json({
        "Mensagem": " Série cadastrada com sucesso",
        novaSerie

    })
})

app.listen(8090,() => {
    console.log(" Porta 8090 funcionando")
})  