const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('root')
})

app.get('/about', (req, res) => {
    res.send('about')
})

app.listen(port, () => {
    console.log(`Responding at http://0.0.0.0:${port}/`)
})
