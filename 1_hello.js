const express = require('express')
const app = express()
// const birds = require('./birds')
const port = 3000

/*app.get('/', (req, res) => {
    res.send('Hello World!')
})*/

// app.use('/birds', birds)

app.use(express.static('public'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
