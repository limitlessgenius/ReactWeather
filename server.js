var express = require('express');

// Create our app;
var app = express();
const PORT = process.env.PORT || 4000;

app.use(express.static('public'));

app.listen(PORT, function() {
    console.log(`Express Server On Port: ${PORT}`);
});