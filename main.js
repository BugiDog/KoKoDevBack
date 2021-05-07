const express = require('express')
const port = 3000
const app = express()
app.listen(port, () => console.log(`Server started on ${port} port`))
console.log("Hello")

app.use('/add', () => {
    console.log("Ебать робит")
})