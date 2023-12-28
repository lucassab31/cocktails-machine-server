const express = require('express');
const router = express.Router();
const pool = require('../config/database');

router.get('/', async (req, res) => {
    try {
        const [parties] = await pool.query('SELECT * FROM parties');
        res.render('index', { parties });
    } catch (err) {
        res.status(500).send('Erreur lors de la récupération des soirées');
    }
});

module.exports = router;
