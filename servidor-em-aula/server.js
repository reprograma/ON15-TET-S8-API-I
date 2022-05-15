const filmesJson = require("./data/ghibli.json") //puxar os filmes de data
const express = require("express") //importa o express - biblioteca de códigos
const app = express() //ativa o express

const cors = require("cors")//importando o cors para burlar a regra de comunicacao no mesmo dominio
app.use(cors())//ativa o cors
app.use(express.json()) //faz o parseamento do body (body parser)


//GET = READ: PEGAR OS DADOS PARA LEITURA
app.get("/filmes", (request, response)=>{  //configurando a rota (em vermelho) que vai buscar as informações no servidor. Além disso, é a função
    response.status(200).send(filmesJson) //respondendo o status 200, que é ok, e enviando a lista de filmes (que é uma variável)
});

//GET = READ: PEGAR UM FILME POR ID
app.get("/filmes/buscar/:id", (request, response)=>{//aqui busca um filme específico por id
    let idRequest = request.params.id//pegando o id que está entrando na requisição (request) do client
    
    let filmeEncontrado = filmesJson.find(filme => filme.id == idRequest)//aqui está dizendo se a requição (request) do client é igual ao que está na variável filme encontrado
                                                                        //ARRAY.find(elemento => comparacao)
                                                                        //encontre um filme dentro de filmes Jason
                                                                        //que o id do filme seja igual o id do request
    
    response.status(200).send(filmeEncontrado)//o filme encontrado no servidor é enviado num status de resposta 200 (ok) para o client
});


//POST = CREATE
app.post("/filmes/cadastrar", (request, response)=>{//Criando verbo POST / criando a rota / criando a função
    let bodyRequest = request.body//pegando as informações do body (POSTMAN) e guardando numa variável

    let novoFilme = {//colocando os dados de um novo filme dentro de uma variável
        id: (filmesJson.length) + 1,//define o id considerando o último de forma sequencial
        title: bodyRequest.title,//indicando que o título guarda em title
        description: bodyRequest.description//indicando que a descrição guarda em description

    }
    filmesJson.push(novoFilme)//pegando a variável novoFilme e inserindo no nosso Json"o banco de dados - ghibli"

    response.status(201).send({//enviando a resposta de sucesso
        "mensagem": "filmes cadastrado com sucesso",//mensagem configurada
        novoFilme//retornando os dados do novo filme
        
        })
})



app.listen(3030, ()=>{
    console.log("alô, pepe moreno? to na porta 3030")
})
    