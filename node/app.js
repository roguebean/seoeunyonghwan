require.paths.unshift('./node_modules');

var express = require('express');
var app = express.createServer();
app.use(express.static(__dirname + '/web'));
app.listen(process.env.VCAP_APP_PORT || 8080);
