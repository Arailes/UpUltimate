'use strict'

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
var env = require('./config/env');
var fs = require('fs');

// Render já fornece HTTPS, então rode em HTTP se não houver certificados
let app;
if (fs.existsSync(env.HTTPS_KEY) && fs.existsSync(env.HTTPS_CERT)) {
  var hskey = fs.readFileSync(env.HTTPS_KEY);
  var hscert = fs.readFileSync(env.HTTPS_CERT);
  var options = { key: hskey, cert: hscert };
  app = express(options);
} else {
  app = express();
}

var router = express.Router();

var port = process.env.PORT || process.env.API_PORT || 10000;

mongoose.connect(env.DATABASE);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use('/api', router);

router.get('/', function(req, res) {
  res.json({ message: 'API Initialized!'});
});

//import /auth routes
const auth = require('./routes/auth');
app.use('/auth', auth.router);

//import /price routes
const price = require('./routes/price');
app.use('/api/price', price);

//import /suggestions routes
const suggestions = require('./routes/suggestions');
app.use('/api/suggestions', suggestions.router);

//import /bot routes
const bot = require('./routes/bot');
app.use('/api/bot', bot);

//set server to listen on port on any interface (0.0.0.0)
app.listen(port, function() {
  console.log('api running on port ' + port);
});
