// FILMES
// Prof, olá! Sei que nao é bom hábito aumentar o codigo, mas faço as anotações para estudar depois. Obrigada <3
// sequência: chamar o express, criar porta
const filmesJson = require ("./data/filmes.json") 
const seriesJson = require ("./data/series.json")
const express = require ("express")
const app = express()  

app.use(cors())

app.use (express.json())  //faz o body parse


// primeira rota só / para configurar o próximo Json

app.get ("/", (request, response)=> {
    response.status(200).json([
        {
            "mensagem":"API de filmes e séries para o lar"
        }
    ])
}
)

//primeiro GET = retornar todos os filmes

app.get ("/filmes", (request, response)=>{
    response.status(200).send(filmesJson) //testei rodando normal
      
})

// segundo GET = buscar id

app.get("/filmes/buscar/:id", (request, response)=>{
    let idRequest = request.params.id
    let filmeEncontrado = filmesJson.find(filme => filme.id == idRequest)
    response.status(200).send(filmeEncontrado) //aqui, usei o recurso find para recuperar o id da request
}
) //testei e funcionou

// TERCEIRO GET - Buscar pelo titulo

app.get("/filmes/buscar/titulo", (request, response) => {

    let tituloFilmeRequest = request.body.title.toLowerCase()
    let tituloFilmeEncontrado = filmesJson.filter(filme => filme.title.toLowerCase().includes(tituloFilmeRequest))

    response.status(200).send(tituloFilmeEncontrado) // testei e nao deu certo, nao sei o que errei
})

//POST - CADASTRO

app.post("/filmes/cadastrar", (request, response)=>{
    let bodyRequest= request.body
    let novoFilme = {
        
        id: (filmesJson.lenght)+1,
        Title: bodyRequest.Title,
        Year: bodyRequest.Year,
        Rated: bodyRequest.Rated,
        Released: bodyRequest.Released,
        Runtime: bodyRequest.Runtime,
        Genre: bodyRequest.Genre,
        Director: bodyRequest.Director,
        Writer: bodyRequest.Writer,
        Actors: bodyRequest.Actors,
        Plot: bodyRequest.Plot,
        Language: bodyRequest.Language,
        Country: bodyRequest.Country,
        Awards: bodyRequest.Awards
    }
    filmesJson.push(novoFilme)
    response.status(201).send({

        "mensagem":"Filme cadastrrado com suceesso!"
    }
       
    )
})

//SÉRIES

// GET = retomar todas as séries

app.get ("/series", (request, response)=>{
    response.status(200).send(seriesJson) //testei rodando normal
      
})

// GET = buscar pelo id

app.get("/series/buscar/:id", (request, response)=>{
    let idRequest = request.params.id
    let serieEncontrada = seriesJson.find(serie => serie.id == idRequest)
    response.status(200).send(serieEncontrada) 
}
) // ok testei

// GET = Buscar pelo titulo, nao consegui rodar

app.get("/filmes/buscar/titulo", (request, response) => {

    let tituloSerieRequest = request.body.title.toLowerCase()
    let tituloSerieEncontrada = seriesJson.filter(serie => serie.title.toLowerCase().includes(tituloSerieRequest))

    response.status(200).send(tituloSerieEncontrada)
})

//POST - Cadastro de nova série 

app.post("/series/cadastrar", (request, response)=>{
    let bodyRequest= request.body
    let novaSerie = {
        
        id: (seriesJson.lenght)+1,
        title: bodyRequest.title,
        totalSeasons: bodyRequest.totalSeasons,
        genre: bodyRequest.genre,
        writers: bodyRequest.writers,
        poster: bodyRequest.poster,
        actors: bodyRequest.actors,
        ratings: bodyRequest.ratings
        
    }
    seriesJson.push(novaSerie)
    response.status(201).send({

        "mensagem":"Serie cadastrada com suceesso!"
    }
       
    )
})



app.listen (9090, ()=>{
    console.log('menina de vermelho na porta 9090') //testei e ok
}
    )
