const express = require('express')
const path = require("path");
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

const car = {type:"Fiat", model:"500", color:"white"};
app.get('/json', (req, res) => {
    res.json(car)
})

app.get('/file', (req, res) => {
    res.download("public/ktor_logo.png")
})

app.get('/file-stream', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'ktor_logo.png'))
})

app.get('/old', (req, res) => {
    res.redirect("moved")
})

app.listen(port, () => {
    console.log(`Responding at http://0.0.0.0:${port}/`)
})
