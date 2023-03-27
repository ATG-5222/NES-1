const express = require('express');

const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cookieParser());

app.use(session({
    secret: 'qweasdzxc',
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

app.use(express.static(path.join(__dirname, 'publics')));
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const routeHomepage = require('./routes/routeHomepage');

app.use('/', routeHomepage);

app.use((request, response, next) => {
    console.log("Error 404");
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});