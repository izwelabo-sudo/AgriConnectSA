const express = require('express');
const router = express.Router();
const { getFarms } = require('../controllers/farmController');

router.get('/', getFarms);

module.exports = router;
