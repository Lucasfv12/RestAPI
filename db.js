const mysql = require('mysql2');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'lucas',
    password: 'lucas123',
    database: 'taskapi'
});

conexion.connect((err) => {
    if (err){
        console.error('Error conectando a MySQL:', err);
        return;
    }
    console.log('Conexión a MySQL establecida');
});

module.exports = conexion;