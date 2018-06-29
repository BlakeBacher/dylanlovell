const express = require('express')
var path = require('path');
const app = express();

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/dylan.html'));
});

app.listen(3050)