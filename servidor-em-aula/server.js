//chamar o data para cá, criar uma variável que vai requerer o arquivo da data:
const filmesJson = require("./data/ghibli.json")

const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())
app.use(express.json()) //faz o parseamento do body (body parser)

//criando uma variável pra armazenar o número da porta
const PORT = 7070

app.get("/", (request, response)=>{
    response.status(200).json([
        {
            "mensagem": "API de filmes Ghibli on15"
        }
    ])
})
 
app.get("/filmes", (request, response)=>{
    response.status(200).send(filmesJson)
})

//parametros que queremos filtrar, colocaremos na própria rota
app.get("/filmes/buscar/:id", (request, response)=>{
   //recuperando o valor do id enviado na request
    let idRequest = request.params.id
         //Estrutura do find: ARRAY.find(elemento => comparação)
         //encontre um filme dentro do filmes Json
         //que o id do filme seja igual ao id do request
    let filmeEncontrado = filmesJson.find(filme => filme.id == idRequest)
    response.status(200).send(filmeEncontrado)
})


app.post("/filmes/cadastrar", (request, response)=>{
    let bodyRequest = request.body

 /*    let novoFilme = {
        id: bodyRequest.id,
        title: bodyRequest.title,
        description: bodyRequest.description
    } */

    let novoFilme = {
        id: (filmesJson.length)+1, 
        title: bodyRequest.title,
        description: bodyRequest.description
    }

    //método pra adicionar um novo item na array
    filmesJson.push(novoFilme)
    
    response.status(201).send({
        "mensagem": "filme cadastro com sucesso",
        novoFilme
    })       
})

app.listen(PORT, ()=> {
    console.log(`porta ${PORT} tá funcionando`)
})

