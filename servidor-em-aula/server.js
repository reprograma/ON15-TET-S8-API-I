const filmesJson = require("./data/ghibli.json")

const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json()) //parseamento do body (body parser)


app.get("/", (request, response)=>{
    response.status(200).json([

    {
    "mensagem": "API de filmes Ghibli ON15"
}
    ])
})


app.get("/filmes", (request, response)=>{
    response.status(200).send(filmesJson)
})

//query params
app.get("/filmes/filtro", (request, response)=>{
    let tituloRequest = request.query.titulo.toLowerCase()
    

    let filmeEncontrado = filmesJson.filter(
        filme => filme.title.toLowerCase().includes(tituloRequest))

    response.status(200).send(filmeEncontrado)
    
})



app.get("/filmes/buscar/:id", (request, response)=>{
    let idRequest = request.params.id

    let filmeEncontrado = filmesJson.find(filme=> filme.id ==idRequest)

    response.status(200).send(filmeEncontrado)
})

app.listen(3030, ()=>{
    console.log("Segundo servidor")
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
        "mensagem": "filmes cadastrados com sucesso",
        novoFilme
    })
})