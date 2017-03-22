var express = require('express')
var app = express()

var routes = require('./app/routes/routes.js')

require('dotenv').load()

routes(app)

var port = process.env.PORT || 3000
app.listen(port, function(){
	console.log(`Node.js is listening in port ${port}...`)
})