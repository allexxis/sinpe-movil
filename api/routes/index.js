const { Router } = require('express');
const express = require('express');
const router = express.Router();
const sinpe = require('.//sinpe');
const transaction = require('./transaction');

router.use('/sinpe', sinpe);
router.use('/transaction', transaction);

module.exports = router;
