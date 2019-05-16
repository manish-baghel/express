const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = require('./ApplicationInstance');
const logger = require('morgan');
const compression = require('compression');
const mainRoutes = require('./backend/routes/MainRoutes');
//default app setup (incorporating middlewares)
app.use(logger('dev'));// for logging purposes
app.use(compression());// for compressing data objects
app.use(express.static(path.resolve(__dirname, 'client')));// for static asset serving
app.use(bodyParser.urlencoded({extended: true}));// Parse incoming request bodies in a middleware [take a look at npm page of body-parser] 
app.use(bodyParser.json());// return middleware that only parses json
app.set('views', __dirname + '/client/views')// main views directory [frontend structure]  
app.engine('html',require('ejs').renderFile);// ejs - for rendering ejs in html format
app.set('view engine','ejs');// seeting view-engine as ejs
app.set('port', process.env.PORT || 4000);// port on which application will run
// Routes
app.use('/', mainRoutes);// main route or default route




// Starting server
app.listen(app.get('port'),() => {
	console.log('Application running in port: '+ app.get('port'));	
});
