const pool = require('../config/database');

exports.cocktails = async (req, res) => {
    try {
        const [cocktails] = await pool.query("SELECT * FROM drinks WHERE type_drink = 'C'");

        // load recipes for each cocktail
        for (const cocktail of cocktails) {
            const [recipes] = await pool.query("SELECT * FROM recipes LEFT JOIN drinks ON drinks.id_drink = recipes.id_drink_compose WHERE id_drink_composed = ?", [cocktail.id_drink]);
            cocktail.recipes = recipes;
        }

        res.json({ success: true, drinks: cocktails });
    } catch (err) {
        res.json({ success: false, error: err.message });
    }
}

exports.alcohols = async (req, res) => {
    try {
        const [alcohols] = await pool.query("SELECT * FROM drinks WHERE type_drink = 'A'");

        res.json({ success: true, drinks: alcohols });
    } catch (err) {
        res.json({ success: false, error: err.message });
    }
}

exports.softs = async (req, res) => {
    try {
        const [softs] = await pool.query("SELECT * FROM drinks WHERE type_drink = 'S'");

        res.json({ success: true, drinks: softs });
    } catch (err) {
        res.json({ success: false, error: err.message });
    }
}
