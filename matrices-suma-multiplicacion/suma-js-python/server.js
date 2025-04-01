const http = require('http');
const fs = require('fs');
const path = require('path');

function sumMatrices(matrix1, rows, cols, matrix2) {
    const result = [];
    for (let i = 0; i < rows * cols; i++) {
        result.push(matrix1[i] + matrix2[i]);
    }
    return result;
}

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        if (req.url === '/' || req.url === '/index.html') {
            const filePath = path.join(__dirname, 'index.html');
            fs.readFile(filePath, (err, content) => {
                if (err) {
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Error interno del servidor');
                } else {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(content);
                }
            });
        }
    } else if (req.method === 'POST' && req.url === '/sum') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            const data = JSON.parse(body);
            const { matrix1, rows, cols, matrix2 } = data;

            const result = sumMatrices(matrix1, rows, cols, matrix2);

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(result));
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Ruta no encontrada');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
