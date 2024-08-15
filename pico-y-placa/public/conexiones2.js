// Requerimos los módulos necesarios para crear un servidor HTTP y conectarnos a la base de datos MS SQL
const http = require('http');
const sql = require('mssql');  // Módulo para trabajar con bases de datos MS SQL
const { URL } = require('url');
const { parse } = require('querystring');

// Configuración de la conexión a la base de datos MS SQL
const dbConfig = {
    user: '',               // Usuario de la base de datos
    password: '',           // Contraseña del usuario
    server: 'DESKTOP-Q3N2CGC', // Nombre del servidor MS SQL (puede ser una dirección IP o un nombre de dominio)
    database: 'picoyplacadb', // Nombre de la base de datos a la que nos queremos conectar
};

// Conectar a la base de datos y manejar el éxito o error de la conexión
sql.connect(dbConfig).then(pool => {
    if (pool.connected) {
        console.log('Conectado a la base de datos.'); // Mensaje de éxito en la conexión
    }
}).catch(err => {
    console.error('Error al conectar a la base de datos:', err); // Mensaje de error si la conexión falla
});

// Función para verificar si una hora está en el rango especificado
function estaEnRango(horaStr) {
    // Convertir la cadena de hora en un objeto Date y obtener la hora en formato de 24 horas con decimales
    const hora = new Date(`1970-01-01T${horaStr}:00Z`).getHours() +
                 new Date(`1970-01-01T${horaStr}:00Z`).getMinutes() / 60;

    // Definir los rangos de tiempo en horas
    const rango1Inicio = 6;    // 6 AM
    const rango1Fin = 9;       // 9 AM
    const rango2Inicio = 16;   // 4 PM
    const rango2Fin = 20;      // 8 PM

    // Verificar si la hora está dentro de alguno de los rangos definidos
    return (hora >= rango1Inicio && hora <= rango1Fin) ||
           (hora >= rango2Inicio && hora <= rango2Fin);
}

// Función para determinar si un vehículo puede circular basado en su placa, fecha y hora
function puedeCircular(placa, fecha, hora) {
    // Obtener el último dígito de la placa del vehículo
    const ultimoDigito = parseInt(placa.slice(-1));
    // Obtener el día de la semana a partir de la fecha (0: Domingo, 1: Lunes, etc.)
    const diaSemana = new Date(fecha).getDay();
    // Verificar si la hora está en el rango permitido
    const atiempo = estaEnRango(hora);

    // Definición de las restricciones de circulación para cada día de la semana
    const restricciones = {
        1: [1, 2], // Lunes
        2: [3, 4], // Martes
        3: [5, 6], // Miércoles
        4: [7, 8], // Jueves
        5: [9, 0], // Viernes
        6: [],     // Sábado (sin restricciones)
        0: []      // Domingo (sin restricciones)
    };

    // Verificar si la hora está dentro de los rangos permitidos y si el último dígito de la placa está restringido para el día
    return atiempo && restricciones[diaSemana].includes(ultimoDigito) ? false : true;
}

// Crear el servidor HTTP
const server = http.createServer(async (req, res) => {
    // Manejar las solicitudes POST a la ruta '/consultar'
    if (req.method === 'POST' && req.url === '/consultar') {
        let body = '';

        // Recibir los datos de la solicitud en fragmentos
        req.on('data', chunk => {
            body += chunk.toString();
        });

        // Cuando se reciban todos los datos, procesar la solicitud
        req.on('end', async () => {
            try {
                // Parsear los datos de la solicitud como JSON
                const data = JSON.parse(body);
                const { placa, fecha, hora } = data;

                // Verificar si todos los datos necesarios están presentes
                if (!placa || !fecha || !hora) {
                    res.writeHead(400, { 'Content-Type': 'application/json' });
                    return res.end(JSON.stringify({ error: 'Datos incompletos' })); // Responder con error si faltan datos
                }

                // Determinar si el vehículo puede circular
                const puede = puedeCircular(placa, fecha, hora);
                const respuesta = puede ? "SI" : "NO"; // Determinar la respuesta según si el vehículo puede circular

                // Guardar la consulta en la base de datos
                const pool = await sql.connect(dbConfig);
                const query = 'INSERT INTO Consultas (fecha_registro, hora_registro, puede_circular, placa) VALUES (@fecha, @hora, @puede, @placa)';
                await pool.request()
                    .input('fecha', sql.Date, fecha)   // Parámetro para la fecha
                    .input('hora', sql.Time, hora)     // Parámetro para la hora
                    .input('puede', sql.NVarChar, respuesta) // Parámetro para la respuesta (si puede circular o no)
                    .input('placa', sql.NVarChar, placa)    // Parámetro para la placa del vehículo
                    .query(query);  // Ejecutar la consulta

                // Enviar la respuesta al cliente
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ mensaje: `El vehículo ${respuesta} puede circular.` }));
            } catch (error) {
                // Manejar errores durante el procesamiento de la solicitud
                console.error('Error al procesar la solicitud:', error);
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Error en el servidor.' })); // Responder con error si ocurre una excepción
            }
        });
    } else {
        // Manejar solicitudes a rutas no definidas
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found'); // Responder con error 404 si la ruta no es encontrada
    }
});

// Iniciar el servidor y escuchar en el puerto 3000
server.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000'); // Mensaje de inicio del servidor
});
