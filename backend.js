const express = require('express')
const app = express()
const port = 2022
app.get('/', (req, res) => {
    res.send('Welcome To GGDev!')
})

app.listen(port, () => {
    console.log(`GGDev Backend started listening on port ${port}`)
})