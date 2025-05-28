const { Pool } = require("pg")
require('dotenv').config();

const connectionString = process.env.NODE_ENV === "production" ? process.env.INTERNAL_DB_URL : process.env.LOCAL_DB_URL

const dbPool = new Pool({
    connectionString,
    ssl: process.env.NODE_ENV === "production" ? { rejectUnauthorized: false } : false
})

module.exports = dbPool