// refazendo reassistindo a aula... dia de estudo = dia 20/05
const filmesJson = require ("./data/ghibli.json")

const express = require ("express")
const cors = requeire("cors")
const app = express()

app.use(cors())

app.use (express.json())  //faz o body parse

app.get("/", (request, response)=>{
    response.status(200).json([
      {
        "mensagem": "API de filmes Ghibli on 15"
      }  
    ])
}
)

app.get("/filmes", (request, response)=>{
    response.status(200).send(filmesJson) //lista completa de GET de todos os filmes. 
})

app.get("/filmes/buscar/:id", (request, response)=>{  //depois de status vai ser id, entao o nome poderia variar
    let idRequest = request.params.id //recuperandop o valor do id na request

    let filmeEncontrado = filmesJson.find(filme => filme.id == idRequest) //filtro para achar o id  ARRAY.find(elemento => comparaçao), encontrando um filme dentro de filmes Json
    response.status(200).send(filmeEncontrado)
})

app.post("/filmes/cadastrar", (request,response)=>{
    let bodyRequest= request.body 
    
    
    let novoFilme = {

    
    id: (filmesJson.lenght)+1, //o ultimo item cadastrado + o novo, contribui para que eles permaneçam em ordem
    title: bodyRequest.title,
     description: bodyRequest.description
    }
    filmesJson.push(novoFilme)                  //push é o comando para add um item a uma array

    response.status(201).send({
        "mensagem": "filme cadastrado com sucesso" ,
    })
})


app.listen(3333, ()=>{
    console.log("alô alô marciano porta 3333")
})



















// const filmesJson = require("./data/ghibli.json")

// const express = require("express")
// const cors = require("cors")

// const app = express()

// app.use(cors())
// app.use(express.json()) //faz o parseamento do body(body parser)


// app.get("/", (request, response)=>{
//     response.status(200).json([
//         {
//             "mensagem":"API de filmes Ghibli"
//         }
//     ])
// })


// app.get("/filmes", (request, response)=>{
//     response.status(200).send(filmesJson)
// })


// app.get("/filmes/buscar/:id", (request, response)=>{
//     //recuperando o valor do ID enviado na request
//     let idRequest = request.params.id
//                         //ARRAY.find(elemento => comparaçao)
//                         //encontre um filme dentro do filmes Json
//                         //que o id do filme seja igual o id do request
//     let filmeEncontrado = filmesJson.find(filme => filme.id == idRequest)

//     response.status(200).send(filmeEncontrado)

// })


// app.post("/filmes/cadastrar", (request,response)=>{
//     let bodyRequest = request.body

//     let novoFilme = {
//         id: (filmesJson.length)+1, 
//         title: bodyRequest.title, 
//         description: bodyRequest.description 
//     }
//     filmesJson.push(novoFilme)
    
//     response.status(201).send({

//         "mensagem": "filmes cadastrado com sucesso",
//         novoFilme
//     })
// })


// app.listen(3030, ()=>{
//     console.log("alô, pepe moreno? to na porta 3030")
// })