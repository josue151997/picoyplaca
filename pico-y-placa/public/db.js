const sql = require('mssql');

const dbConfig = {
    user: '',               // Usuario de la base de datos
    password: '',           // Contraseña del usuario
    server: 'DESKTOP-Q3N2CGC', // Nombre del servidor MS SQL
    database: 'picoyplacadb', // Nombre de la base de datos
};

// Exportar la configuración y el módulo sql
module.exports = { sql, dbConfig };
