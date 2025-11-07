const Membership = require('../models/Membership');

// Get all membership plans
exports.getMemberships = async (req, res) => {
  try {
    const memberships = await Membership.find({}); // <- remove populate('plan')
    res.json(memberships);
  } catch (err) {
    console.error('Error fetching memberships:', err);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Get single membership plan by ID
exports.getMembershipById = async (req, res) => {
  try {
    const membership = await Membership.findById(req.params.id); // <- remove populate('plan')
    if (!membership) return res.status(404).json({ message: 'Membership not found' });
    res.json(membership);
  } catch (err) {
    console.error('Error fetching membership:', err);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Create membership
exports.createMembership = async (req, res) => {
  try {
    const { title, description, durationMonths, price, perks } = req.body;
    const membership = await Membership.create({ title, description, durationMonths, price, perks });
    res.status(201).json(membership);
  } catch (err) {
    console.error('Error creating membership:', err);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Update membership
exports.updateMembership = async (req, res) => {
  try {
    const membership = await Membership.findById(req.params.id);
    if (!membership) return res.status(404).json({ message: 'Membership not found' });
    Object.assign(membership, req.body);
    await membership.save();
    res.json(membership);
  } catch (err) {
    console.error('Error updating membership:', err);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Delete membership
exports.deleteMembership = async (req, res) => {
  try {
    const membership = await Membership.findById(req.params.id);
    if (!membership) return res.status(404).json({ message: 'Membership not found' });
    await membership.remove();
    res.json({ message: 'Membership removed' });
  } catch (err) {
    console.error('Error deleting membership:', err);
    res.status(500).json({ message: 'Server Error' });
  }
};
