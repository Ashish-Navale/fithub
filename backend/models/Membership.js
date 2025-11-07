const mongoose = require('mongoose');

const membershipSchema = new mongoose.Schema({
  title: { type: String, required: true },           // Plan title
  description: { type: String },                     // Plan description
  durationMonths: { type: Number },                  // Duration in months
  price: { type: Number },                           // Price
  perks: [{ type: String }],                         // List of perks/features
  active: { type: Boolean, default: true },         // Active status
  createdAt: { type: Date, default: Date.now }      // Creation date
});

module.exports = mongoose.model('Membership', membershipSchema);
