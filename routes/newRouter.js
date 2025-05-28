const { Router } = require('express')
const newRouter = Router()
const asyncHandler = require('express-async-handler')
const dbPool = require("../db/Pool")

newRouter.get('/', ( req, res ) => {
    res.render('form')
})

newRouter.post('/', asyncHandler(async ( req, res ) => {
    const text = req.body.text;
    const username = req.body.username;
    if( text === "Ass" || username === "Hole" ) {
        throw new Error("Don't be a twat")
    }
    async function addMessageToDB(text, username) {
        await dbPool.query(
        `INSERT INTO minimessageboard (text, username) VALUES ($1,$2)`, [text, username]
        )
    }
    addMessageToDB(text, username)
    res.redirect('/')
}))

module.exports = newRouter