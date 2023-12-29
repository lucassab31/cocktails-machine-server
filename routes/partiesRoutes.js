const express = require('express');
const partyController = require('../controllers/partyController');

const router = express.Router();

router.get('/', partyController.index);
router.get('/select/:id', partyController.selectParty);
router.post('/create', partyController.create);

module.exports = router;
