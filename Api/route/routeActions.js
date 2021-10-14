const express = require('express');

const router = express.Router();

const { findActions, findOneAction } = require('../controllers/searchListController');

router.get('/', findActions);
router.get('/:id', findOneAction);

module.exports = router;
