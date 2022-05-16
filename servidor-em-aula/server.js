<<<<<<< HEAD
const filmes = require("./data/ghibli.json")
=======
const filmesJson = require("./data/ghibli.json")
>>>>>>> 9bfa55f61641bebbd6f122b1a3f972c0d46173e3

const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
<<<<<<< HEAD
app.use(express.json())

app.get("/", (request, response) => {
    response.status(200).json([
        {
            "mensagem": "API de filmes Ghibli ON15"
=======
app.use(express.json()) //faz o parseamento do body(body parser)


app.get("/", (request, response)=>{
    response.status(200).json([
        {
            "mensagem":"API de filmes Ghibli"
>>>>>>> 9bfa55f61641bebbd6f122b1a3f972c0d46173e3
        }
    ])
})

<<<<<<< HEAD
app.get("/filmes", (request, response) => {
    response.status(200).send(filmes)
})

app.get("/filmes/buscar/:id", (request, response) => {
    let idRequest = request.params.id

    let filmeEncontrado = filmes.find(filme => filme.id == idRequest)
    response.status(200).send(filmeEncontrado)
    
})

app.get("/filmes/filtro", (request, response) => {
    let nomeRequest = request.query.titulo.toLocaleLowerCase()

    let filmeEncontrado = filmes.filter(filme => filme.title.toLowerCase().includes(nomeRequest))
    response.status(200).send(filmeEncontrado)
})

app.post("/filmes/cadastrar", (request, response) => {
    let bodyRequest = request.body
    let novoFilme = {
        id: (filmes.length)+1,
        title: bodyRequest.title,
        description: bodyRequest.description

    }

    filmes.push(novoFilme)
    response.status(201).send({
        "mensagem": "Filme cadastrado com sucesso",
=======

app.get("/filmes", (request, response)=>{
    response.status(200).send(filmesJson)
})


app.get("/filmes/buscar/:id", (request, response)=>{
    //recuperando o valor do ID enviado na request
    let idRequest = request.params.id
                        //ARRAY.find(elemento => comparaçao)
                        //encontre um filme dentro do filmes Json
                        //que o id do filme seja igual o id do request
    let filmeEncontrado = filmesJson.find(filme => filme.id == idRequest)

    response.status(200).send(filmeEncontrado)

})


app.post("/filmes/cadastrar", (request,response)=>{
    let bodyRequest = request.body

    let novoFilme = {
        id: (filmesJson.length)+1, 
        title: bodyRequest.title, 
        description: bodyRequest.description 
    }
    filmesJson.push(novoFilme)
    
    response.status(201).send({
        "mensagem": "filmes cadastrado com sucesso",
>>>>>>> 9bfa55f61641bebbd6f122b1a3f972c0d46173e3
        novoFilme
    })
})

<<<<<<< HEAD
app.listen(8099, () => {
    console.log(" TOC TOC! Quem bate? É a porta! Que porta? A Porta 8099")
}) 
=======

app.listen(3030, ()=>{
    console.log("alô, pepe moreno? to na porta 3030")
})
>>>>>>> 9bfa55f61641bebbd6f122b1a3f972c0d46173e3
