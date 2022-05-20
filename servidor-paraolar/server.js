//chamar o data para cá, criar uma variável que vai requerer o arquivo da data:
const filmesJson = require("./data/filmes.json")
const seriesJson = require("./data/series.json")

const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())
app.use(express.json()) //faz o parseamento do body (body parser)

//criando uma variável pra armazenar o número da porta
const PORT = 8080

//criando rota principal
app.get("/", (request, response)=>{
    response.status(200).json([
        {
            "mensagem": "API de Filmes e  Séries - Turma ON15"
        }
    ])
})

//rota para buscar todos os filmes
app.get("/filmes", (request, response)=>{
    response.status(200).send(filmesJson)
})

//criando parametro para filtrar os filmes pelo id
app.get("/filmes/buscar/:id", (request, response)=>{
   //recuperando o valor do id enviado na request
    let idRequest = request.params.id
         //encontrar filme dentro de filmesJson que o id do filme seja igual ao id do request
    let filmeEncontrado = filmesJson.find(filme => filme.id == idRequest)
    
    response.status(200).send(filmeEncontrado)
})

//criando parametro para encontrar filmes pelo título
app.get("/filmes/buscartitulo/:Title", (request, response)=>{
    //recuperando o valor do title enviado na request
    let titleRequest = request.params.Title.toLowerCase()
    let tituloFilme = filmesJson.find(filme => filme.Title.toLowerCase() == titleRequest)
    
    response.status(200).send(tituloFilme)
})

//criando rota para cadastrar filmes novos
app.post("/filmes/cadastrar", (request, response)=>{
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

    //método pra adicionar um novo item na array
    filmesJson.push(novoFilme)
    
    response.status(201).send({
        "mensagem": "O filme foi cadastro com sucesso",
        novoFilme
    })       
})

//rota para buscar todas as séries
app.get("/series", (request, response)=>{
    response.status(200).send(seriesJson)
})

//criando parametro para filtrar as series pelo id
app.get("/series/buscar/:id", (request, response)=>{
    //recuperando o valor do id enviado na request
     let idRequest = request.params.id
        //encontrar serie dentro de seriesJson que o id da serie seja igual ao id do request
     let serieEncontrada = seriesJson.find(serie => serie.id == idRequest)
     
     response.status(200).send(serieEncontrada)
 })
 
//criando parametro para encontrar series pelo título
app.get("/series/buscartitulo/:title", (request, response)=>{
    //recuperando o valor do title enviado na request
     let titleRequest = request.params.title.toLowerCase()
     let tituloSerie = seriesJson.find(serie => serie.title.toLowerCase() == titleRequest)
     
     response.status(200).send(tituloSerie)
 })

//criando rota para cadastrar séries novas
app.post("/series/cadastrar", (request, response)=>{
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

    //método pra adicionar um novo item na array
    seriesJson.push(novaSerie)
    
    response.status(201).send({
        "mensagem": "A série foi cadastrada com sucesso",
        novaSerie
    })       
})

app.listen(PORT, ()=> {
    console.log(`porta ${PORT} tá funcionando`)
})

