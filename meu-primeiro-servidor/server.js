// const { response } = require("express")
const express = require("express")    //invocação//
const app   = express()   //excecução//

//rota//
app.get("/", (request, response)=>{
    response.status(200).json(["salve, mundao"])

})
app.get("/ola", (request, response)=>{
    response.status(200).json(["oieee"])
})

//configurar porta//
app.listen(8080, ()=>{    //criação da porta
    console.log("Meu servidor ta rodadando na porta 8080!!")

})

