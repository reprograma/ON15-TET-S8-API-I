const express = require("express") // chamando o express para o arquivo
const app = express()

app.get("/", (request, response)=>{
    response.status(200).json(["salve, mundao"]) // 200 significa "tudo certo/sucesso"
})

app.get("/ola", (request, response)=>{
    response.status(200).json(["hello"])
})

app.listen(8080, ()=>{ // número acima de 3000 (significa o nº da porta), normalmente são as portas disponíveis no pc.
    console.log("meu servidor ta rodando na porta 8080")
})

