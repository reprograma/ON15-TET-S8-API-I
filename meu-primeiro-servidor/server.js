//requerindo o express pro pc (chamando)
const express = require("express") //não alterar como indicado no vscode) 
const app = express() //executar express na var 

//primeiro parm é a rota (pode ser sem texto "/" ou com algum nome "/nome"), no segundo função q recebe request e response: callback
app.get("/", (request, response)=>{
    response.status(200).json(["tá rodando!"])
})
app.get("/ola", (request, response)=>{
    response.status(200).json(["Oláres!"])
})

//a função listen está dentro do express
//criar/configurar porta
app.listen(8080, () => {
    console.log("meu servidor está rodando na porta 8080")
}) //colocar num acima de 3000
