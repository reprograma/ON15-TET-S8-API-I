const filmesJson = require("./data/filmes.json")
const seriesJson = require("./data/series.json")

const express = require("express")
const cors = require ("cors")

const app = express()

app.use(cors()) // API deve ser utilizado cors
app.use(express.json())// faz o parseamento do boby (body parser)

//***************  Filmes  ****************************************************************************
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

// **retorna o filme com id selecionado**
app.get("/filmes/buscar/:id", (request, response) =>{   
    let idRequest = request.params.id
          
    let filmesEncontrado = filmesJson.find(filme => filme.id == idRequest)
    response.status(200).send(filmesEncontrado)
    
})
// **cadastra um novo filme**
app.post("/filmes/cadastrar", (request, response)=>{
    let bodyRequest = request.body
    
    let novoFilme = {
        id: (filmesJson.length) + 1,
        Title: bodyRequest.Title,
        Year: bodyRequest.Year,
        Rated: bodyRequest.Rated,
        Released: bodyRequest.Released,
        Runtime: bodyRequest.Runtime,
        Genre: bodyRequest.Genre,
        Director: bodyRequest.Genre,
        Writer: bodyRequest.Writer,
        Actors: bodyRequest.Actors,
        Plot: bodyRequest.Plot,
        Language: bodyRequest.Language,
        Country: bodyRequest.Country,
        Awards: bodyRequest.Awards

    }
    
    filmesJson.push(novoFilme)

    response.status(201).send({
        "mensagem": "filmes cadastrado com sucesso",
        novoFilme
    });
});
//*************   Series   **********************************************************************************
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


//***********************************************************************************************************
// Porta escolhida para API
app.listen(6060, ()=>{
    console.log("alô, estou na porta 6060")
})
  
  