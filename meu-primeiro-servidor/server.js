const express = require("express")
const app = express()

app.get("/", (request, response) =>{


    response.status(200).json("Está funcionando!")
})

app.get("/informacoes", (request, response)=>{

response.status(200).json("Meu nome é Maria Clara, tenho 22 anos e sou carioca!")

})

app.listen(3256, ()=>{

    console.log("O servidor está rodando na porta 3256!")
})