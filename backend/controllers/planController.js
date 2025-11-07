const Plan = require('../models/Plan');

exports.createPlan = async (req, res) => {
  const { title, description, durationWeeks, price, level, category } = req.body;
  const p = await Plan.create({ title, description, durationWeeks, price, level, category });
  res.status(201).json(p);
};

exports.getPlans = async (req, res) => {
  const { q, level, category, minPrice, maxPrice } = req.query;
  let filter = { active: true };
  if (q) filter.title = { $regex: q, $options: 'i' };
  if (level) filter.level = level;
  if (category) filter.category = category;
  if (minPrice) filter.price = { ...(filter.price || {}), $gte: Number(minPrice) };
  if (maxPrice) filter.price = { ...(filter.price || {}), $lte: Number(maxPrice) };

  const plans = await Plan.find(filter);
  res.json(plans);
};

exports.getPlanById = async (req, res) => {
  const p = await Plan.findById(req.params.id);
  if (!p) return res.status(404).json({ message: 'Plan not found' });
  res.json(p);
};

exports.updatePlan = async (req, res) => {
  const p = await Plan.findById(req.params.id);
  if (!p) return res.status(404).json({ message: 'Plan not found' });
  const updates = req.body;
  Object.assign(p, updates);
  await p.save();
  res.json(p);
};

exports.deletePlan = async (req, res) => {
  const p = await Plan.findById(req.params.id);
  if (!p) return res.status(404).json({ message: 'Plan not found' });
  await p.remove();
  res.json({ message: 'Plan removed' });
};
