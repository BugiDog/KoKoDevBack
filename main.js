const express = require('express')
const auth = require('./API/Authorization')
const port = 3000
const app = express()
app.listen(port, () => console.log(`Server started on ${port} port`))
console.log("Hello")

app.use('/authorization', auth)