const mongoose = require('mongoose');

const planSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  durationWeeks: Number,
  price: Number,
  level: { type: String, enum: ['Beginner','Intermediate','Advanced'], default: 'Beginner' },
  category: String,
  createdAt: { type: Date, default: Date.now },
  active: { type: Boolean, default: true }
});

module.exports = mongoose.model('Plan', planSchema);
