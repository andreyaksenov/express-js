const express = require('express')
const app = express()
const port = 3000

app.get('/user/:login', (req, res) => {
    if (req.params['login'] === 'admin') {
        res.send('You are logged in as Admin')
    }
})

app.listen(port, () => {
    console.log(`Responding at http://0.0.0.0:${port}/`)
})
