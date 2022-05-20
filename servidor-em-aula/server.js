//criar uma var para importar/requerir os dados do arquivo que estão em outra pasta e tbm n possui nome de var nela
//./ trás arquivos da mesma linha de pastas ( ../ vai pra outras unidades)
const filmesJson = require("./data/ghibli.json")

const express = require("express")
const cors = require("cors")

const app = express()

//criar var para automatizar alreação do nº da porta
const PORT = 3030 //nome var em maiusculo = padrão do mercado

app.use(cors())
app.use(express.json()) //faz o parseamento do body(body parser)


app.get("/", (request, response)=>{
    response.status(200).json([
        {
            "mensagem":"API de filmes Ghibli"
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

//fazer filtro por nome
//o query params possibilita buscas mais amplas (de textos, com espaços...)
app.get("/filmes/filtro", (request, response) => {
    let tituloRequest = request.query.titulo.toLowerCase()
    let filmeEncontrado = filmesJson.filter(
        filme => filme.title.toLowerCase().includes(tituloRequest))

    response.status(200).send(filmeEncontrado)
})

//fazer cadastro (POST de criação)
//não altera o arquivo original, a alteração é só temporária
app.post("/filmes/cadastrar", (request,response)=>{
    let bodyRequest = request.body

    let novoFilme = {
        id: (filmesJson.length)+1, 
        title: bodyRequest.title, 
        description: bodyRequest.description 
    }
    filmesJson.push(novoFilme) //add um novo item num array
    
    response.status(201).send({
        "mensagem": "filmes cadastrado com sucesso",
        novoFilme
    })
})


app.listen(PORT, ()=>{
    console.log(`alô, pepe moreno? to na porta ${PORT}`)
})