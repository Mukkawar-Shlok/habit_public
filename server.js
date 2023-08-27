const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
require('./config/mongoose');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', require('./routes'));
app.set('view engine', 'ejs');
app.set('views', './views');

//listening on port
app.listen(PORT, () => {
    console.log("yippeee server is running");
});
