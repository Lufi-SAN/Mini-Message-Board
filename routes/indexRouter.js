const { Router } = require('express');
const indexRouter = Router();
const asyncHandler = require('express-async-handler')
const { messages } = require('../data/messages')
  
indexRouter.get('/', asyncHandler(( req, res ) => {
    res.render('index', {  title: "Mini Messageboard", messages: messages })
}))

module.exports = indexRouter