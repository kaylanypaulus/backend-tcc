const controllers = require('./controllers');
const bodyParser = require('body-parser');
const express = require('express')
const app = express()
require('dotenv').config()

// server config
app.use(bodyParser.json());
app.use(express.json())

// import routes
const routes = require('./routes')
app.use(routes)

app.use('/products', controllers.products);

// server data config
const protocol = process.env.PROTOCOL || 'http'
const ip = require('ip').address()
const port = process.env.PORT || 3030

app.listen(port, console.log(`Server started in http://localhost:${port} or ${protocol}:${ip}:${port}`))
