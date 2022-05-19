const express = require("express")
const app = express()

app.get("/", (request, response)=>{  /// o primeiro sempre vai ter a questão de requsisiao e o segundo de resposta.
response.status(200).json(["ola, pexual"])
} )

app.get("/hellow", (request, response)=>{ ///tem duas rotas "/" precisa colocar a rota no postman

    response.status(200).json(["baby, baby"])
})

app.listen(9090, ()=>{
console.log("meu servidor ta rodando na porta 9090. thanks, god!")

})