const { Router } = require('express')
const newRouter = Router()
const { messages } = require('../data/messages')

newRouter.get('/', ( req, res ) => {
    res.render('form')
})

newRouter.post('/', ( req, res ) => {
    if(req.body.text === "Ass" || req.body.user === "Hole") {
        throw new Error("Don't be a twat")
    }
    messages.push({ text: req.body.text, user: req.body.user, added: new Date() });
    res.redirect('/')
})

module.exports = newRouter