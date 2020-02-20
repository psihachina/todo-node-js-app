const express = require('express');
const routes = require('./routes')
const bodyParser = require('body-parser');
const errorHandler = require('./routes/404');
//создаем веб-приложение
let app = express();
const port = 80;

app.set('view engine', 'pug')

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", routes);


app.use(errorHandler);
//зауск веб-приложения
app.listen(port, () => {
    console.log('app run on http://localhost');
});