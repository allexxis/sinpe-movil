const express = require('express');
const router = express.Router();
const Message = require('../models/message');
const createError = require('http-errors');

router.post('/', async (req, res, next) => {
   const { name, phone, comprobante, amount, details } = req.body;
   if (!name || !phone || !comprobante || !amount || !details) {
      return next(createError(400, 'Missing parameter'));
   }
   const message = await new Message({
      name,
      phone,
      comprobante,
      amount,
      details,
   })
      .save()
      .catch((error) => {
         if (error.code === 11000) {
            return next(
               createError(400, "Can't recieve duplicate <comprobante>")
            );
         }
         return next(createError(400));
      });
   if (!message) {
      return next(createError(400));
   }
   return res.send(message);
});
router.get('/', async (req, res, next) => {
   const messages = await Message.find().catch((error) => {
      console.error(error);
   });
   if (!messages) {
      return next(createError(400));
   }
   return res.send(messages);
});
module.exports = router;
