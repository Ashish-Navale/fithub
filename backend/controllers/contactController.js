const Contact = require('../models/Contact');

exports.sendMessage = async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) return res.status(400).json({ message: 'All fields required' });
  const c = await Contact.create({ name, email, message });
  res.status(201).json({ message: 'Message received', contact: c });
};

exports.getMessages = async (req, res) => {
  const messages = await Contact.find().sort({ createdAt: -1 });
  res.json(messages);
};
