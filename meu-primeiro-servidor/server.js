//chamando o express pro pc (requisição)
const express = require("express")
const app = express()  //executar express na variável

//primeiro parâmetro é a rota (pode ser sem texto "/" ou com algum nome "/nome"); 
//segundo parâmetro função q recebe request e response: callback
app.get("/", (request, response)=>{
    response.status(200).json(["Oi coisa linda"])
})

app.get("/oi", (request, response)=>{
    response.status(200).json(["oi princesa"])
})

//a função listen está dentro do express
//criar/configurar porta
//usar número de porta acima de 3000
app.listen(8080, ()=>{
    console.log("servidor rodando lindo na porta 8080")
})