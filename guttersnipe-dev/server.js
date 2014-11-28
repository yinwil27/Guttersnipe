var express = require('express'),
    bodyParser = require('body-parser'),
    logger = require('logger');



var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');

app.use(bodyParser());
//app.use(logger('dev'))
app.use(express.static(__dirname + '/public'));

app.get('*', function respondToHTTPRequest(req, res) {
    res.sendFile( __dirname + '/server/views'+'/index.html');
});

var port = 4444;
app.listen(port);
console.log('Listening to port ' + port + '...');
