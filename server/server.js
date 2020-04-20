const express = require('express')
const server = express()

require('dotenv').config()

server.use(express.json())
server.use(express.static('public'))


server.get('/v1/api', (req, res) => {
    res.send(process.env.API_KEY)
})

module.exports = server
