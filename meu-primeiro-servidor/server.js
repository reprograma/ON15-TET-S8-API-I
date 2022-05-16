const express = require("express")
const app = express()

app.get("/", (request, response) => {
    response.status(200).json(["Hi there! Hey there! Bye there!"])
})
app.get("/ola", (request, response) => {
    response.status(200).json(["Olá, tudo bem?"])
})
app.listen(8090, () => {
    console.log("meu servidor está rodando na porta 8090")
}) 


// app.get("/", (request, response)=>{
//     response.status(200).json(["Oi coisa linda"])
// })

// app.get("/oi", (request, response)=>{
//     response.status(200).json(["oi princesa"])
// })

// app.listen(8080, ()=>{
//     console.log("servidor rodando lindo na porta 8080")
// })
