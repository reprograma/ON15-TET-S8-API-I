//reassistindo a aula e refazendo para revisar!! estudo antes da aula do dia 18

const express = require("express")
const app = express()

app.get("/", (request, response)=>{
    response.status(200).json(["salve, mundao"])
})

app.listen(8080, () => {
    console.log("meu servidor ta rodando na porta 8080, graças a deus")

})

app.get("/ola", (request, response)=>{
    response.status(200).json(["oizinho"])
})






// const express = require("express")
// const app = express()

// app.get("/", (request, response)=>{
//     response.status(200).json(["Oi coisa linda"])
// })

// app.get("/oi", (request, response)=>{
//     response.status(200).json(["oi princesa"])
// })

// app.listen(8080, ()=>{
//     console.log("servidor rodando lindo na porta 8080")
// })