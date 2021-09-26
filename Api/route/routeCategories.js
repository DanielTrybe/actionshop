const express = require('express');

const router = express.Router();

const { categList } = require('../controllers/categoriesListController')

router.get('/', categList)

module.exports = router;