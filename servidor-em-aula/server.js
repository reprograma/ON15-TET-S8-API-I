const filmesJson = require("./data/ghibli.json")

const express = require("express")
const app = express()

app.use(express.json())

app.get("/", (request,response)=>{
    response.status(200) .json([
        {
            "mensagem": "API de filmes Ghibli on15"
        }  
    ])
     
    })

app.get("/filmes", (request, response)=>{
    response.status(200).send(filmesJson)
})

app.get("/filme/buscar/:id", (request, response)=>{
 let idRequest = request.params.id
 let filmeEcontrado = filmesJson.find(filme => filme.id == idRequest)
 response.status(200).send(filmeEcontrado)
 console.log(idRequest)
 console.log(filmeEcontrado)
})

app.post("/filmes/cadastrar", (request, response)=>{
    let bodyRequest = request.body
    console.log(bodyRequest)

    let novoFilme = {
        id: (filmesJson.length) +1,
        title: bodyRequest.title,
        description: bodyRequest.description
    }
    filmesJson.push(novoFilme)

    response.status(201).send({
    "mensagem": "filme cadastrado com sucesso", novoFilme
    })
})

app.listen(6030, ()=>{
    console.log("alô,  to na porta 6030")
})
