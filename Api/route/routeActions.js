const express = require('express');

const router = express.Router();

const { findActions } = require('../controllers/searchListController');

router.get('/', findActions);

module.exports = router;
