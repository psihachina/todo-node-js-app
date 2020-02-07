const express = require('express');
const routes = require('./routes')
const urlencoded = require('body-parser').urlencoded({ extended: true });

//создаем веб-приложение
let app = express();
const port = 80;

app.set('view engine', 'pug')

app.use(express.static(__dirname + '/public'));
app.use(urlencoded);
app.use("/", routes);
//зауск веб-приложения
app.listen(port, () => {
    console.log('app run on http://localhost');
});