const filmesJson = require("./data/ghibli.json")


const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())

const PORT = 5001


app.get("/", (request, response)=>{
response.status(200).json([
{
"mensagem": "aprendendo sobre (API Ghibli) nessa aula top da Nalu."
}
])
})

app.get("/filmes", (request, response)=>{
    response.status(200).send(filmesJson)

})

app.use(express.json())

app.post("/filmes/cadastrar", (request, response)=>{
let bodyRequest = request.body

let novoFilme = {
    id: (filmesJson.length)+1,
    title: bodyRequest.title,
    description: bodyRequest.description
}

filmesJson.push(novoFilme)

response.status(201).send({
"mensagem":"filme cadastrado com sucesso",
novoFilme

})

})


 app.get("/filmes/buscar/:id", (request, response)=>{
     ///recuperando o valor do ID enviado na request 
    
let idRequest = request.params.id
                ////array.find(elemento => comparação)
                ///encontre um filme dentro dos filmes json
                ///que o id do film,e seja igualo id do request 
let filmeEncontrado = filmesJson.find(filme => filme.id == idRequest)
response.status(200).send(filmeEncontrado) 
})

app.listen(PORT, ()=>{
console.log(`uhul, testando isso aqui, ó na porta ${PORT}`)

})
