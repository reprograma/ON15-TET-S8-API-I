const filmesJson = require("./data/ghibli.json")

const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json()) // faz o body parser (parseamento do body)

app.get("/", (request,response)=>{
    response.status(200).json([
        {
            "mensagem": "API de filmes Ghibli on15"
        }
    ])
})

app.get("/filmes", (request,response)=>{ // a primeira info é uma requisição; a segunda é uma response - independete do nome que cada uma tiver
    response.status(200).send(filmesJson)
})



app.get("/filmes/buscar/:id", (request, response)=>{
    //recuperando o valor do ID enviado na request
    let idRequest = request.params.id
                    //ARRAY.find(elemento => comparação)
                    //encontre um filme dentro do filmes Json
                    // que o id do filme seja igual ao id do request
    let filmeEncontrado = filmesJson.find(filme => filme.id == idRequest)

    response.status(200).send(filmeEncontrado)

})

// query params
app.get("/filmes/filtro", (request, response)=>{
    let titleRequest = request.query.title.toLowerCase()

    let titleEncontrado = filmesJson.filter(
        filme => filme.title.toLowerCase().includes(titleRequest))

    response.status(200).send(titleEncontrado)
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

app.listen(9292, ()=>{
    console.log("Alô, pepe moreno? Tô na porta 9292")
})
