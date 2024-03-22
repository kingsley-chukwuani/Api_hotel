require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const roomTypeRoutes = require('./Routes/roomTypes');
const roomRoutes = require('./Routes/rooms');
const app = express();

mongoose.connect(process.env.Database_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

app.use(express.json());
app.use('/api/v1/rooms-types', roomTypeRoutes);
app.use('/api/v1/rooms', roomRoutes);

app.listen(5000, () => console.log('Server started on port 5000'));