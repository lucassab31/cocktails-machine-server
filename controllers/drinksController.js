exports.cocktails = async (req, res) => {
    try {
        const [cocktails] = await pool.query('SELECT * FROM drinks WHERE type_drink = C');

        res.json({ success: true });
    } catch (err) {
        res.json({ success: false, error: err.message });
    }
}

exports.alcohols = async (req, res) => {
    try {
        const [alcohols] = await pool.query('SELECT * FROM drinks WHERE type_drink = A');

        res.json({ success: true });
    } catch (err) {
        res.json({ success: false, error: err.message });
    }
}

exports.softs = async (req, res) => {
    try {
        const [softs] = await pool.query('SELECT * FROM drinks WHERE type_drink = S');

        res.json({ success: true });
    } catch (err) {
        res.json({ success: false, error: err.message });
    }
}
