const filmesJson = require("./data/filmes.json")
const seriesJson = require("./data/series.json")

const express = require("express")
const cors = require ("cors")

const app = express()

app.use(cors()) // API deve ser utilizado cors
app.use(express.json())// faz o parseamento do boby (body parser)

//***************  FILMES  ****************************************************************************
app.get("/", (request, response)=>{
    response.status(200).json([
        {
            "mensagem": "API de filmes "
        }
    ])
})
 // **retornar todos os filmes**
app.get("/filmes", (request, response) =>{
    response.status(200).send(filmesJson)
})

// **retorna o filme com id selecionado**
app.get("/filmes/buscar/:id", (request, response) =>{   
    let idRequest = request.params.id
          
    let filmesEncontrado = filmesJson.find(filme => filme.id == idRequest)
    response.status(200).send(filmesEncontrado)
    
})
//**retorna o filme com nome selecionado**  */
app.get("/filmes/filtro", (request, response)=>{
    let tituloRequest = request.query.titulo.toLowerCase()
    // console.log(tituloRequest)

    let filmesEncontrado = filmesJson.filter(
        filmes => filmes.Title.toLowerCase().includes(tituloRequest)
    )
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
//*************   SERIES   **********************************************************************************
app.get("/oi", (request, response)=>{
    response.status(200).json([
        {
            "mensagem": "API de series"
        }
    ])
})

// **retornar todos os Series**
app.get("/series", (request, response) =>{
    response.status(200).send(seriesJson)
})

// **retorna a serie com id selecionado**
app.get("/series/buscar/:id", (request, response) =>{    
    let idRequest = request.params.id

    let seriesEncontrado = seriesJson.find(series => series.id == idRequest)
    response.status(200).send(seriesEncontrado)
   
})

/**retorna uma serie com nome selecionado */
app.get("/series/filtro", (request, response)=>{
    let tituloRequest = request.query.title.toLowerCase()
    // console.log(tituloRequest)

    let serieEncontrado = filmesJson.filter(
        serie => serie.title.toLowerCase().includes(tituloRequest)
    )
    response.status(200).send(serieEncontrado)
})

// **cadastra uma nova serie**
app.post("/series/cadastrar", (request, response)=>{
    let bodyRequest = request.body
    
    let novaSerie = {
        id: (seriesJson.length) + 1,
        title: bodyRequest.title,
        totalSeasons: bodyRequest.totalSeasons,
        genre: bodyRequest.genre,
        writers: bodyRequest.writers,
        poster: bodyRequest.poster,
        actors: bodyRequest.actors,
        ratings: bodyRequest.ratings,
        rating: bodyRequest.rating,
        likes: bodyRequest.likes        

    }

    seriesJson.push(novaSerie)

    response.status(201).send({
        "mensagem": "serie cadastrada com sucesso",
        novaSerie
    });
});


//***********************************************************************************************************
// Porta escolhida para API
app.listen(6060, ()=>{
    console.log("alô, estou na porta 6060")
})
  
  