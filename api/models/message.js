const { Schema, model } = require('mongoose');

const MessageSchema = new Schema({
   comprobante: {
      required: true,
      type: String,
      unique: true,
   },
   name: {
      required: true,
      type: String,
   },
   phone: {
      required: true,
      type: String,
   },
   amount: {
      required: true,
      type: Number,
   },
   details: {
      required: true,
      type: String,
   },
});
const Message = model('messages', MessageSchema);
module.exports = Message;
