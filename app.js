const express = require('express');
const app = express();

// Configuración
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

// Rutas
const usersRouter = require('./routes/users');

app.get('/', (req, res) => {
    res.redirect('/users/')
});
app.use('/users', usersRouter);

// Servidor
app.listen(3008, () => { console.log('Servidor funcionando en el puerto 3008.') })