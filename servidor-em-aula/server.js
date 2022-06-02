const filmesJson = require("./data/ghibli.json")
const express = require("express")
const app = express()
const cors = require("cors")
app.use(cors())
app.use(express.json())


app.get("/filmes", (request, response) => {

response.status(200).json(filmesJson)


})

app.get("/filmes/buscar/:id", (request, response) => {

let idRequest = request.params.id
let filmeEncontrado = filmesJson.find(filme => filme.id == idRequest)
response.status(200).json(filmeEncontrado)

})

app.get("/filmes/filtro", (request, response) => {

let titleRequest = request.query.title.toLowerCase()

let filmeEncontrado = filmesJson.filter(filme => filme.title.toLowerCase().includes(titleRequest))

response.status(200).json(filmeEncontrado)

app.post("/filmes/cadastrar", (request, response)=>{

let bodyRequest = request.body

let novoFilme = {
id: (filmesJson.length)+1,
title: bodyRequest.title,
description: bodyRequest.description

}
filmesJson.push(novoFilme)
response.status(201).json({

    mensagem: "filme cadastrado com sucesso!",
    novoFilme

})

}) 


})
app.listen(5555, ()=>{
console.log("O servidor está rodando na porta 5555!")
})