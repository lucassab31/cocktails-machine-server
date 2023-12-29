const pool = require('../config/database');

exports.index = async (req, res) => {
    try {
        const [parties] = await pool.query('SELECT * FROM parties');
        res.render('pages/parties/index', { title: 'Soirées', parties, date: new Date() });
    } catch (err) {
        res.status(500).send('Erreur lors de la récupération des soirées');
    }
}

exports.selectParty = async (req, res) => {
    try {
        const { id } = req.params;
        await pool.query('UPDATE parties SET active = 0 WHERE active = 1');
        console.log(req.params);
        await pool.query('UPDATE parties SET active = 1 WHERE id_party = ?', id);

        res.json({ success: true });
    } catch (err) {
        res.json({ success: false, error: err.message });
    }
}

exports.create = async (req, res) => {
    try {
        await pool.query('UPDATE parties SET isActive = 0 WHERE active = 1');

        const { partyName, partyLocation, partyDate } = req.body;
        const newParty = { name: partyName, location: partyLocation, date_party: partyDate };
        await pool.query('INSERT INTO parties SET ?', newParty);
        
        res.json({ success: true });
    } catch (err) {
        res.json({ success: false, error: err.message });
    }
}