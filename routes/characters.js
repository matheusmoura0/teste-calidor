const express = require('express');
const router = express.Router();
const charactersController = require('../controllers/charactersController');

router.get('/', charactersController.getAllCharacters);
router.get('/select-random', charactersController.selectRandomCharacter);
router.post('/check', charactersController.checkCharacter);

module.exports = router;
