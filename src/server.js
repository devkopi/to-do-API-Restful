const express = require('express');
const mongoose = require('mongoose');
const dontenv = require('dotenv');

dontenv.config();

const app = express();
const port = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Se conectó MongoDB'))
    .catch((err) => console.error('No se pudo conectar a MongoDB...', err));

app.use(express.json());

// Importar las Rutas
const taskRoutes = require('./routes/tasks');
app.use('/api/tasks', taskRoutes);

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});