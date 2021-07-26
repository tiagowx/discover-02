const express = require("express")
const server = express()
const routes = require("./routes")

// Usando view engine
server.set('view engine', 'ejs') 

// Habilitar arquivos statics
server.use(express.static("public"))



// Routes
server.use(routes)

server.listen(3000, () => console.log('rodando'))
