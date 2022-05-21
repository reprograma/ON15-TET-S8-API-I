const filmesJson = require("./data/ghibli.json")

const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())


app.get("/" , (request, response)=>{
    response.status(200).json([
        {
            "mensagem" : "API de filmes Ghibli on15."
        }
    ])
})


app.get("/filmes", (request, response)=>{
    response.status(200).send(filmesJson)
})


app.get("/filmes/buscar/:id", (request, response)=>{
    
    let idRequest = request.params.id

    let filmeEncontrado = filmesJson.find(filme => filme.id == idRequest)

    response.status(200).send(filmeEncontrado)
    console.log(idRequest)
    console.log(filmeEncontrado)
    
})
//app.post(3030, ()=>{ // aerofunction = callback
//    console.log("alô, querides. Estou na porta 3030")
//})
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
        "mensagem" : "filmes cadastrados com sucesso!",
        novoFilme
    })
})
