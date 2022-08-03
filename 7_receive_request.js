const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.post('/text', bodyParser.text(), (req, res) => {
    let text = req.body
})

app.post('/json', bodyParser.json(), (req, res) => {
    let car = req.body
})

app.post('/urlencoded', bodyParser.urlencoded(), (req, res) => {
    let car = req.body
})

app.post('/raw', bodyParser.raw({type: () => true}), (req, res) => {
    let rawBody = req.body
})

app.listen(port, () => {
    console.log(`Responding at http://0.0.0.0:${port}/`)
})
