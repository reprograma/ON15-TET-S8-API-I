const filmesJson = require("./data/filmes.json")
const seriesJson = require("./data/series.json")

const express = require("express")
const cors = require ("cors")

const app = express()

app.use(cors()) // API deve ser utilizado cors
app.use(express.json())// faz o parseamento do boby (body parser)

//***************Filmes****************************************************************************
app.get("/", (request, response)=>{
    response.status(200).json([
        {
            "mensagem": "API de filmes "
        }
    ])
})
app.get("/filmes", (request, response) =>{
    response.status(200).send(filmesJson)
})


app.get("/filmes/buscar/:id", (request, response) =>{   
    let idRequest = request.params.id
          
    let filmesEncontrado = filmesJson.find(filme => filme.id == idRequest)
    response.status(200).send(filmesEncontrado)
    
})

//*************Series**********************************************************************************
app.get("/oi", (request, response)=>{
    response.status(200).json([
        {
            "mensagem": "API de series"
        }
    ])
})
app.get("/series", (request, response) =>{
    response.status(200).send(seriesJson)
})

app.get("/series/buscar/:id", (request, response) =>{    
    let idRequest = request.params.id

    let seriesEncontrado = seriesJson.find(series => series.id == idRequest)
    response.status(200).send(seriesEncontrado)
   
})



// Porta escolhida para API
app.listen(7070, ()=>{
    console.log("alô, estou na porta 7070")
})