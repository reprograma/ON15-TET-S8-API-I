const filmes = require('./data/filmes.json')
const series = require('./data/series.json')

const express = require('express')
const app = express()

const cors = require('cors')
const { request, response } = require('express')

app.use(cors())
app.use(express.json())

app.get('/', (request, response) => {
  response.status(200).json([
    {
      mensagem: 'API de filmes e series'
    }
  ])
})

app.get('/filmes', (request, response) => {
  response.status(200).send(filmes)
})

app.get('/series', (request, response) => {
  response.status(200).send(series)
})

app.get('/filmes/buscar/:id', (request, response) => {
  let idRequest = request.params.id

  let filmeEncontrado = filmes.find(filme => filme.id == idRequest)
  response.status(200).send(filmeEncontrado)
})

app.get('/series/buscar/:id', (request, response) => {
  let idRequest = request.params.id

  let seriesEncontrada = series.find(series => series.id == idRequest)
  response.status(200).send(seriesEncontrada)
})

app.get('/filmes/buscaPorNome', (request, response) => {
  let nomePesquisa = request.query.nomeDoFilme.toLowerCase()

  let filmeEncontrado = filmes.filter(filme =>
    filme.Title.toLowerCase().includes(nomePesquisa)
  )
  response.status(200).send(filmeEncontrado)
})

app.get('/series/buscaPorNome', (request, response) => {
  let nomePesquisa = request.query.nomeDaSerie.toLowerCase()

  let serieEncontrada = series.filter(serie =>
    serie.title.toLowerCase().includes(nomePesquisa)
  )
  response.status(200).send(serieEncontrada)
})

app.post('/filmes/cadastrar', (request, response) => {
  let bodyRequest = request.body

  let novoFilme = {
    id: filmes.length + 1,
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
  filmes.push(novoFilme)

  response.status(201).send({
    mensagem: 'filme cadastrado com sucesso',
    novoFilme
  })
})

app.post('/series/cadastrar', (request, response) => {
  let bodyRequest = request.body

  let novaSerie = {
    id: series.length + 1,
    title: bodyRequest.title,
    totalSeasons: bodyRequest.totalSeasons,
    genre: bodyRequest.genre,
    writers: bodyRequest.writers,
    poster: bodyRequest.poster,
    actors: bodyRequest.actors,
    ratings: bodyRequest.ratings
  }

  series.push(novaSerie)

  response.status(201).send({
    mensagem: 'série cadastrada com sucesso',
    novaSerie
  })
})

//------------ Porta onde está sendo executado ----------------------
app.listen(8080, () => {
  console.log('servidor rodando na porta 8080')
})
