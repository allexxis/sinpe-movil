const express = require('express');
const router = express.Router();
const Message = require('../models/message');
const createError = require('http-errors');

router.post('/', async (req, res, next) => {
   console.log(req.body);
   const { comprobante, name } = req.body;
   if (!name || !comprobante) {
      return next(createError(400, { message: 'Missing parameter' }));
   }
   const message = await Message.findOne({ comprobante: comprobante });
   if (!message) {
      return next(createError(400, { message: '<comprobante> not found' }));
   }
   return res.send(message);
});

module.exports = router;
