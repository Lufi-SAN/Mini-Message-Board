require("dotenv").config()
const express = require('express')
const app = express()
const path = require("path")
const indexRouter = require('./routes/indexRouter')
const newRouter = require('./routes/newRouter')

const assetPath = path.join(__dirname, "public")

app.use(express.static(assetPath))
app.use(express.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.use('/', indexRouter)
app.use('/new', newRouter)

app.use(( req, res ) => {
    res.status(404).send("Doest not exist")
})

app.use((err,req,res,next) => {
    res.render("error", { error: err.stack })
})

const PORT = 3000 || process.env.PORT
app.listen(PORT, () => {
    console.log("App is up and running")
})
