const filmesJson = require("./data/ghibli.json")

const express = require("express")
const cors = require ("cors")

const app = express()

app.use(cors()) // API deve ser utilizado cors
app.use(express.json())// faz o parseamento do boby (body parser)

app.get("/", (request, response)=>{
    response.status(200).json([
        {
            "mensagem": "API de filmes ghibli"
        }
    ])
})
app.get("/filmes", (request, response) =>{
    response.status(200).send(filmesJson)
})


app.get("/filmes/buscar/:id", (request, response) =>{
    //recuperando o valor do ID enviado na request
    let idRequest = request.params.id

            //ARRAY.find(elemento =>comparação)
            //encontre um fime dentro do filmes json
            //que o id do filme seja o id request
    let filmesEncontrado = filmesJson.find(filme => filme.id == idRequest)
    response.status(200).send(filmesEncontrado)
    // console.log(idRequest)
    // console.log(filmesEncontrado)
})



app.post("/filmes/cadastrar", (request, response)=>{
    let bodyRequest = request.body
    
    let novoFilme = {
        id: (filmesJson.length) + 1,
        title: bodyRequest.title,
        description: bodyRequest.description
    }
    
    filmesJson.push(novoFilme)

    response.status(201).send({
        "mensagem": "filmes cadastrado com sucesso",
        novoFilme
    });
});
        

app.listen(3030, ()=>{
    console.log("alô, estou na porta 3030")
})