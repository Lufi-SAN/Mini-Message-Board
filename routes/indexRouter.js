const { Router } = require('express');
const indexRouter = Router();
const asyncHandler = require('express-async-handler')
const dbPool = require("../db/Pool")
  
indexRouter.get('/', asyncHandler(async ( req, res ) => {
    await dbPool.query (`
                          CREATE TABLE IF NOT EXISTS minimessageboard 
                          (id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, 
                          text TEXT, username VARCHAR(255), added DATE DEFAULT CURRENT_DATE);
                        `
                       )
    const { rows : initialCheck } = await dbPool.query('SELECT COUNT(*) FROM minimessageboard');
    console.log(initialCheck)
    const count = parseInt(initialCheck[0].count)

    if ( count === 0 ) {
        await dbPool.query(`
                            INSERT INTO minimessageboard (text, username) VALUES
                            ('Hi There', 'Armando'),
                            ('Hello World', 'Charles');
                         `)
    }

    const { rows: getAllMessages } = await dbPool.query(`SELECT text, username FROM minimessageboard`)
    res.render('index', {  title: "Mini Messageboard", messages: getAllMessages })
}))

module.exports = indexRouter