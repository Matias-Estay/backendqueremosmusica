const express = require('express');
const cors = require('cors');

// const { dbConnection } = require('./database/config');
require('dotenv').config();

// Servidor
const app = express();

// Base de datos
// dbConnection();

// CORS
app.use(cors());

// Public
// app.use( express.static('public') );

// Lectura y parseo del body
app.use( express.json() );

// Rutas
// app.use('/api/auth', require('./routes/auth') );
app.use('/api', require('./routes/event') );

// Escuchar peticiones
app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
});
