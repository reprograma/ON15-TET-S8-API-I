const filmesJson = require("./data/ghibli.json") //importanto a lista de filmes que está no arquivo. ("./") é para acessar um arquivo que está na pasta

const express = require("express")
const cors = require("cors")
const app = express()

const PORT = 7070 //número da porta, variável criada para facilitar

// o ideal é usar aqui o comando "app.use(express.json())"" //faz o parseamento do body (body parse) --> preciso disso para funcionar

app.use(cors())

//1 - rota de mensagem 
app.get("/", (request, response)=>{
    response.status(200).json([
        {
            "mensagem":"API de filmes Ghibli on15"
        }
    ])
})

//2 - rota de filmes
app.get("/filmes", (request, response)=>{
    response.status(200).send(filmesJson)
})

//3 - rota do id filme selecionado
app.get("/filmes/buscar/:id",(request, response)=>{
    //recuperando o valor do id enviado na resquest
    let idRequest = request.params.id
                        //ARRAY.find(elemento => comparação)
                        //encontre um filme dentro do filmes Json
                        //que o ID do filme seja igual ao ID do request
    let filmeEncontrado = filmesJson.find(filme => filme.id == idRequest)

    response.status(200).send(filmeEncontrado)

})

app.use(express.json()) //faz o parseamento do body (body parse) --> preciso disso para funcionar

app.post("/filmes/cadastrar", (request, response)=>{
    let bodyRequest = request.body //pega informação do body
    

    //criando um objeto
    let novoFilme = {
        id: (filmesJson.length)+1,
        title: bodyRequest.title,
        description: bodyRequest.description
    }
    filmesJson.push(novoFilme) //adicionar um novo item na lista (array)
    
    //201 é código de criado
    response.status(201).send({
        "mensagem":"filme cadastrado com sucesso!!!", 
        novoFilme
    }) 


})

app.listen(PORT, ()=>{
    console.log(`segundo servidor rodando na porta ${PORT}`)
})