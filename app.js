const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const pool = require('./config/database');

const app = express();

app.use(expressLayouts);
app.set('layout', './layouts/default')
app.set('view engine', 'ejs');
app.use(express.json());

app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));
app.use('/icons', express.static(path.join(__dirname, 'node_modules/bootstrap-icons/font')));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', async (req, res) => {
    const [activeParty] = await pool.query('SELECT * FROM parties WHERE active = 1');
    res.render('pages/home', { title: 'Accueil', activeParty: activeParty[0] });
});
app.use('/parties', require('./routes/partiesRoutes'));

app.use((req, res, next) => {
    // 404 render page not found
    res.status(404).render('pages/404', { title: 'Page non trouvée' });
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server running and listening on port ${port}`);
});