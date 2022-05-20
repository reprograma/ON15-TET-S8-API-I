const filmesJson = require("./data/ghibli.json")
const express = require("express")
const app = express()
const cors = require("cors")
app.use(cors())
app.use(express.json())

app.listen(8080,()=>{
    console.log("Servidor Funcionando na porta 8080")
})
app.get("/",(request,response)=>{
    response.status(200).json([{
        "mensagem":"Testando aqui"
    }])
})
app.get("/filmes",(request,response)=>{
    response.status(200).send(filmesJson)
})

app.get("/filmes/buscar/:id",(request,response)=>{
    let idRequest = request.params.id
    let filmeId= filmesJson.find(filme => filme.id == idRequest)
    response.status(200).send(filmeId)
})

app.post("/filmes/buscar/cadastrar",(request,reponse)=>{
    let bodyRequest = request.body
    let novoFilme = {
        id : (filmesJson.length)+1,
        title : bodyRequest.title,
        description : bodyRequest.description
    }
    filmesJson.push(novoFilme)
    response.status(201).send()
})