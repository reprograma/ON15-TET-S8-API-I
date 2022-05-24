const filmesJson = require("./data/ghibli.json")

const express = require("express")
const cors = require("cors")

const { request, response } = require("express")
const app = express()
app.use(cors())


const PORT = 8090

app.get("/", (request, response)=>{
    response.status(200).json([
        {
            " mensagem":"Api funcionando de filmes Ghilbi on 15"
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
    
})

app.get("/filmes/filtro", (request, response) => {
    let tituloRequest = request.query.titulo.toLocaleLowerCase()
    console.log(tituloRequest)

    let filmeEncontrado = filmesJson.filter(
        filme => filme.title.toLowerCase().includes(tituloRequest))
    response.status(200).send(filmeEncontrado)
    
})


app.use(express.json())


app.post("/filmes/cadastrar", (request, response)=>{
    let bodyRequest = request.body

    let novoFilme = {
        id:(filmesJson.length)+1,
        title: bodyRequest.title,
        description: bodyRequest.description
    }
    filmesJson.push(novoFilme)

    response.status(201).send({
        "Mensagem" : "filme cadastrado com sucesso",
        novoFilme

    })
})

app.listen(8090, ()=>{
    console.log("Só as gatinhas LBT'S do reprograma na porta 8090")
//     console.log(So as gatinhas LBTS do reprograma na porta ${PORT})
})