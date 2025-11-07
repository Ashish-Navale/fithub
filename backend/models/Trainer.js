const mongoose = require('mongoose');

const trainerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  bio: String,
  specialization: [String],
  experience: Number,
  image: String,
  pricePerSession: Number,
  createdAt: { type: Date, default: Date.now },
  active: { type: Boolean, default: true }
});

module.exports = mongoose.model('Trainer', trainerSchema);
