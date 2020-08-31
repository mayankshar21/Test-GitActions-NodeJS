const http = require('http');

const HOSTNAME = '127.0.0.1';

// comment
const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('<h1>Mayank Server</h1>');
    }
});

server.listen(PORT, HOSTNAME, () => console.log(`Server running at http://${HOSTNAME}:${PORT}/`));
