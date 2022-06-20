const filmesJson = require("./data/ghibli.json")

const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json()) //faz o parseamento do body(body parser)


app.get("/", (request, response)=>{
    response.status(200).json([
        {
            "mensagem":"API de filmes Gibi"
        }
    ])
})


app.get("/filmes", (request, response)=>{
    response.status(200).send(filmesJson)
})


app.get("/filmes/buscar/:id", (request, response)=>{
    //recuperando o valor do ID enviado na request
    let idRequest = request.params.id
                        //ARRAY.find(elemento => comparaçao)
                        //encontre um filme dentro do filmes Json
                        //que o id do filme seja igual o id do request
    let filmeEncontrado = filmesJson.find(filme => filme.id == idRequest)

    response.status(200).send(filmeEncontrado)

})


app.post("/filmes/cadastrar", (request,response)=>{
    let bodyRequest = request.body

    let novoFilme = {
        id: (filmesJson.length)+1, 
        title: bodyRequest.title, 
        description: bodyRequest.description 
    }
    filmesJson.push(novoFilme)
    
    response.status(201).send({
        "mensagem": "filmes cadastrado com sucesso",
        novoFilme
    })
})


app.listen(6030, ()=>{
    console.log("alô, minhas consagradas! to na porta 6030")
})