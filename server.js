//simple server
const http = require('http');

const HOSTNAME = 'localhost';
const PORT = 8000;

function requestListener (request, response) {
    response.writeHead(200);
    response.write('Hello World');
    response.end();
};

const server = http.createServer(requestListener)
server.listen(PORT, HOSTNAME, () => {
    console.log(`Server started successfully at http://${HOSTNAME}:${PORT}/`)
});