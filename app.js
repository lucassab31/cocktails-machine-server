const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));

app.get('/', (req, res) => {
    res.render('index');
});

const port = 3000;
app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}`);
});