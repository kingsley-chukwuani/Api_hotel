const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  roomType: { type: mongoose.Schema.Types.ObjectId, ref: 'RoomType' },
  price: Number
});

module.exports = mongoose.model('Room', roomSchema);