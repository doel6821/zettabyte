const express = require('express')
const app = express()
const port = process.env.PORT || 3001
const routes = require('./routes/index')

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(routes)

app.listen(port, (req,res) => {
    console.log(`App running at port ${port}`)
})