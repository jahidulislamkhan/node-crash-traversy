const http = require('http');

http.createServer((req, res) => {
    res.write('This is a simple node server');
    res.end();
}).listen(5000, () => console.log('Server is running....'));
