//criar uma var para importar/requerir os dados do arquivo que estão em outra pasta e tbm n possui nome de var nela
//o ./ trás arquivos da mesma linha de pastas (o ../ vai pra outras unidades)
const filmesJson = require("./data/ghibli.json")
const express = require("express")
const app = express()
const cors = require("cors")

//criar var para automatizar alreação do nº da porta
const PORT = 4015 //nome var em maiusculo = padrão do mercado

app.use(cors())
app.use(express.json()) //fazer o parse do body para que a requisição (post, put e patch) de inclusão funcione corretamente

//utilizar .json para transformar msg em json
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

//fazer um filtro por id
//adicionar os parametros que vão direto na rota de descrição da API
//quando utiliza params as outras rotas devem ter caminhos diferentes, do contrário não funcionarão
app.get("/filmes/buscar/:id", (request, response)=>{
    //recuperando o valor do id enviado na request
    let idRequest = request.params.id
    let filmeEncontrado = filmesJson.find(filme => filme.id == idRequest) 

    response.status(200).send(filmeEncontrado)

    // console.log(idRequest)
    // console.log(filmeEncontrado)

})

//fazer filtro por nome
//o query possibilita buscas mais amplas (de textos, com espaços...)
app.get("/filmes/porNome", (request, response)=>{
    let nomeRequest = request.query.titulo.toLowerCase()
    let filmeEncontrado = filmesJson.filter(filme => filme.title.toLowerCase().includes(nomeRequest)) 

    response.status(200).send(filmeEncontrado)
})


//fazer cadastro (POST de criação)
//não altera o arquivo original, a alteração é só temporária
app.post("/filmes/cadastrar", (request, response)=>{
    let bodyRequest = request.body
    // console.log(bodyRequest)

  /*   let novoFilme = {
        id: bodyRequest.id,
        title: bodyRequest.title,
        description: bodyRequest.description
    } */
    
    //para alterar o id sem precisar informar o nº
    let novoFilme = {
        id: (filmesJson.length)+1,
        title: bodyRequest.title,
        description: bodyRequest.description
    }

    console.log(novoFilme)

    //add um novo item num array
    filmesJson.push(novoFilme)
    
    //cód 201 = criar
    response.status(201).send({
        "mensagem":"Novo filme cadastrado com sucesso",
        novoFilme
    })

})

app.listen(PORT, ()=>{
    console.log(`Estou abrindo a porta ${PORT}`)
})