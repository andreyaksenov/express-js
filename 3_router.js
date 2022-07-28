const express = require('express')
const app = express()
const birds = require('./birds')
const port = 3000

app.use('/birds', birds)

app.listen(port, () => {
    console.log(`Responding at http://0.0.0.0:${port}/`)
})
