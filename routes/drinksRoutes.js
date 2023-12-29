const express = require('express');
const drinksController = require('../controllers/drinksController');

const router = express.Router();

router.get('/cocktails', drinksController.cocktails);
router.get('/alcohols', drinksController.alcohols);
router.get('/softs', drinksController.softs);


module.exports = router;
