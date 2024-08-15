const http = require('http');
const { puedeCircular } = require('./utils');
const { sql, dbConfig } = require('./db');

const server = http.createServer(async (req, res) => {
    if (req.method === 'POST' && req.url === '/consultar') {
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', async () => {
            try {
                const data = JSON.parse(body);
                const { placa, fecha, hora } = data;

                if (!placa || !fecha || !hora) {
                    res.writeHead(400, { 'Content-Type': 'application/json' });
                    return res.end(JSON.stringify({ error: 'Datos incompletos' }));
                }

                const puede = puedeCircular(placa, fecha, hora);
                const respuesta = puede ? "SI" : "NO";

                const pool = await sql.connect(dbConfig);
                const query = 'INSERT INTO Consultas (fecha_registro, hora_registro, puede_circular, placa) VALUES (@fecha, @hora, @puede, @placa)';
                await pool.request()
                    .input('fecha', sql.Date, fecha)
                    .input('hora', sql.Time, hora)
                    .input('puede', sql.NVarChar, respuesta)
                    .input('placa', sql.NVarChar, placa)
                    .query(query);

                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ mensaje: `El vehículo ${respuesta} puede circular.` }));
            } catch (error) {
                console.error('Error al procesar la solicitud:', error);
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Error en el servidor.' }));
            }
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

server.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});
