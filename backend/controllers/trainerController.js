const Trainer = require('../models/Trainer');

// create trainer (admin)
exports.createTrainer = async (req, res) => {
  const { name, bio, specialization, experience, pricePerSession } = req.body;
  const image = req.file ? `/uploads/trainers/${req.file.filename}` : undefined;

  const trainer = await Trainer.create({
    name,
    bio,
    specialization: specialization
      ? specialization.split(',').map((s) => s.trim())
      : [],
    experience,
    pricePerSession,
    image,
  });

  res.status(201).json(trainer);
};

// get all trainers with search & filter
exports.getTrainers = async (req, res) => {
  const { q, spec, minExp, maxPrice } = req.query;

  // 🧩 removed 'active:true' so it fetches all trainers
  let filter = {};

  if (q) filter.name = { $regex: q, $options: 'i' };
  if (spec)
    filter.specialization = { $in: spec.split(',').map((s) => s.trim()) };
  if (minExp)
    filter.experience = { ...(filter.experience || {}), $gte: Number(minExp) };
  if (maxPrice)
    filter.pricePerSession = {
      ...(filter.pricePerSession || {}),
      $lte: Number(maxPrice),
    };

  const trainers = await Trainer.find(filter).sort({ createdAt: -1 });
  res.json(trainers);
};

// get trainer by id
exports.getTrainerById = async (req, res) => {
  const t = await Trainer.findById(req.params.id);
  if (!t) return res.status(404).json({ message: 'Trainer not found' });
  res.json(t);
};

// update trainer (admin)
exports.updateTrainer = async (req, res) => {
  const t = await Trainer.findById(req.params.id);
  if (!t) return res.status(404).json({ message: 'Trainer not found' });

  const {
    name,
    bio,
    specialization,
    experience,
    pricePerSession,
    active,
  } = req.body;

  if (req.file) t.image = `/uploads/trainers/${req.file.filename}`;
  if (name) t.name = name;
  if (bio) t.bio = bio;
  if (specialization)
    t.specialization = specialization.split(',').map((s) => s.trim());
  if (experience) t.experience = experience;
  if (pricePerSession) t.pricePerSession = pricePerSession;
  if (typeof active !== 'undefined') t.active = active;

  await t.save();
  res.json(t);
};

// delete trainer (admin)
exports.deleteTrainer = async (req, res) => {
  const t = await Trainer.findById(req.params.id);
  if (!t) return res.status(404).json({ message: 'Trainer not found' });
  await t.remove();
  res.json({ message: 'Trainer removed' });
};
