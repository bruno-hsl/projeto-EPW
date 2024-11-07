
const express = require('express')
const path = require("path") //servir o diretorio
const app = express()
const port = 3000

app.get('/', (req, res) => {
    const filePath = path.join(__dirname, "front", "index.html") 
    res.sendFile(filePath)
})

app.get('/cssP', (req, res) => {
    const filePath = path.join(__dirname, "front", "css", "paginaPrincipal.css") 
    res.sendFile(filePath)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
