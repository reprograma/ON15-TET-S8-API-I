const filmesJson = require("./data/filmes.json")

const express = require("express") // requisição 
const cors = require("cors") // para prevenção de erros

const app = express() // função nativa do express para criação do servidor

app.use(cors())
app.use(express.json()) 


// criar a porta 
app.listen(4040, ()=>{
    console.log("Servidor, exercício para o lar (filmes e séries)")
})


// <!-- [GET] "/filmes" - retornar todos os filmes
app.get("/filmes", (request, response)=>{
    response.status(200).send(filmesJson)
})


// [GET] "/filmes/buscar/:id" - retorna o filme com id selecionado
app.get("/filmes/buscar/:id", (request, response)=>{
    let idRequest = request.params.id

    let filmeBuscado = filmesJson.find(filme=> filme.id == idRequest)

    response.status(200).send(filmeBuscado)
})


// [GET] "/filmes/buscar/:nome" - retorna o filme com nome selecionado------------------
//query params
app.get("/filmes/filtro", (request, response)=>{
    let tituloRequest = request.query.titulo.toLocaleLowerCase()
    console.log(tituloRequest)

    let filmeEncontrado = filmesJson.filter(
        filme => filme.Title.toLowerCase().includes(tituloRequest))

    response.status(200).send(filmeEncontrado)
    
})


// [POST]"/filmes/cadastrar" - cadastra um novo filme 

app.post("/filmes/cadastrar", (request, response)=>{
    let bodyRequest = request.body
    let novoFilme = {
        id: (filmesJson.length)+1,
        title: bodyRequest.title,
        description: bodyRequest.description
    }
    filmesJson.push(novoFilme)

    response.status(201).send({
        "mensagem": "O filme foi cadastrado com sucesso",
        novoFilme
    })
})
  



//---------------------------------------------------------------------------
// SÉRIES

const seriesJson = require("./data/series.json")

// <!-- [GET] "/series" - retornar todos as séries
app.get("/series", (request, response)=>{
    response.status(200).send(seriesJson)
})


// [GET] "/SERIES/buscar/:id" - retorna a série com id escolhido
app.get("/series/buscar/:id", (request, response)=>{
    let idRequest = request.params.id

    let serieBuscada = seriesJson.find(serie=> serie.id ==idRequest)

    response.status(200).send(serieBuscada)
})


// [GET] "/series/buscar/:nome" - retorna a série com nome selecionado
//query params
app.get("/series/filtro", (request, response)=>{
    let tituloRequest = request.query.titulo.toLowerCase()
    

    let seriesEncontrada = seriesJson.filter(
        series => series.title.toLowerCase().includes(tituloRequest))

    response.status(200).send(seriesEncontrada)
    
})


// [POST]"/series/cadastrar" - cadastra uma nova serie
app.post("/series/cadastrar", (request, response)=>{
    let bodyRequest = request.body
    let novaSerie = {
        id: (seriesJson.length)+1,
        title: bodyRequest.title,
        description: bodyRequest.description
    }
    seriesJson.push(novaSerie)

    response.status(201).send({
        "mensagem": "A série foi cadastrada com sucesso",
        novaSerie
    })
})


