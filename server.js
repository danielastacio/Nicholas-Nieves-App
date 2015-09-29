var connect = require('connect'),
    serveStatic = require('serve-static');

var app = connect();

app.use(serveStatic('src'));
app.listen(5000);

console.log('You are connected to port 5000')