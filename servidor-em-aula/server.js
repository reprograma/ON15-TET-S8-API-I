const filmesJson = require("./data/ghibli.json")

const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json()) //fazendo o body parser


app.get("/", (request, response)=>{
    response.status(200).json([
        {
            "mensagem": "API de filmes Ghibli"
        }
    ])
})

app.get("/filmes", (request, response)=>{
    response.status(200).send(filmesJson)
})

app.get("/filmes/buscar/:id", (request, response)=>{
    //recuperando o valor do id enviado na request
    let idRequest = request.params.id
                             //ARRAY.find(elemento => comparação)
                             //encontre um filme dentro do filmes Json
                             //cujo id do filme seja igual ao id do request
    let filmeEncontrado = filmesJson.find(filme => filme.id == idRequest)

    response.status(200).send(filmeEncontrado)

})


app.post("/filmes/cadastrar", (request, response)=>{
    let bodyRequest = request.body
    
    let novoFilme = {
        id: (filmesJson.length)+1,
        title: bodyRequest.title,
        description: bodyRequest.description
    }
    filmesJson.push(novoFilme)

    response.status(201).send({
        "mensagem": "filme cadastrado com sucesso",
        novoFilme
    })  
})

app.listen(3030, ()=>{
    console.log("alô, pepe moreno? tô na porta 3030")
})