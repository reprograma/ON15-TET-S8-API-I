const filmesJson = require("./data/ghibli.json")

const express = require("express")
const cors = require("cors")


const app = express()

app.use(express.json())
app.use(cors())


app.get("/", (request, response) => {
    response.status(200).json([
        {
            "construir": "json"
        }
    ])
})


app.get("/filmes", (request, response) => {
    response.status(200).send(filmesJson)
})

app.get("/filmes/buscar/:id", (request, response) => {
    let idRequest = request.params.id

    let filmeEncontrado = filmesJson.find(filme => filme.id == idRequest)

    response.status(200).send(filmeEncontrado)    
})




app.post("/filmes/cadastrar", (request, response) => {
    
    let bodyRequest = request.body

    let novoFilme = {
        
        id: (filmesJson.length)+1,
        title: bodyRequest.title,
        description: bodyRequest.description
         
      
    }

    filmesJson.push(novoFilme)

    response.status(201).send({
        "mensagem": "Filmes cadastrado con sucesso",
        filmesJson
    })
})



app.listen(7070, () => {
    console.log("meu servidor está rodando na porta 7070")
})