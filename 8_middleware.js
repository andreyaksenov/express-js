const express = require('express')
const app = express()
const port = 3000

const myLogger = function (req, res, next) {
    console.log('LOGGED')
    next()
}

const requestTime = function (req, res, next) {
    req.requestTime = Date.now()
    next()
}

app.use(myLogger)
app.use(requestTime)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/request-time', (req, res) => {
    let responseText = 'Hello World!<br>'
    responseText += `<small>Requested at: ${req.requestTime}</small>`
    res.send(responseText)
})

app.listen(port, () => {
    console.log(`Responding at http://0.0.0.0:${port}/`)
})
