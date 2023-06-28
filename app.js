const express = require('express');
const app = express();
const hbs = require('hbs');
require('dotenv').config();
const port = process.env.PORT;

//handlebar
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});
// servir contenido estatico
// Para las rutas que se definen las carpetas deben estar creadas
app.use( express.static('public'));

app.get('/', (req, res) => {
    res.render('home', {
        name:"",
        title:"Curso Node"
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        name:"",
        title:"Curso Node"
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        name:"",
        title:"Curso Node"
    });
});

// Manejo de url que no esten definidos
app.get('*', (req, res) => {
    //Envio de error con HTML como respuesta.
    res.sendFile(__dirname + '/public/404.html');
});

app.listen(port,()=>{
    console.log(`Running on port ${port}`);
});