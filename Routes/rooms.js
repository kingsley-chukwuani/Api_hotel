const express = require('express');
const router = express.Router();
const Room = require('../models/Room');

router.post('/', async (req, res) => {
  const room = new Room(req.body);
  await room.save();
  res.status(201).send(room);
});

router.get('/', async (req, res) => {
  const { search, roomType, minPrice =0, maxPrice } = req.query;
  const query = Room.find({ name: new RegExp(search, 'i'), roomType, price: { $gte: minPrice, $lte: maxPrice || Infinity } }).populate('roomType');
  const rooms = await query.exec();
  res.send(rooms);
});

router.patch('/:roomId', async (req, res) => {
  const room = await Room.findByIdAndUpdate(req.params.roomId, req.body, { new: true });
  res.send(room);
});

router.delete('/:roomId', async (req, res) => {
  await Room.findByIdAndDelete(req.params.roomId);
  res.status(204).send();
});

router.get('/:roomId', async (req, res) => {
  const room = await Room.findById(req.params.roomId).populate('roomType');
  res.send(room);
});

module.exports = router;