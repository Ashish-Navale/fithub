const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const connectDB = require('../config/db');
const User = require('../models/User');
const Trainer = require('../models/Trainer');
const Plan = require('../models/Plan');
const bcrypt = require('bcryptjs');

const run = async () => {
  await connectDB();
  await User.deleteMany({});
  await Trainer.deleteMany({});
  await Plan.deleteMany({});

  const hashed = await bcrypt.hash('admin123', 10);
  const admin = await User.create({ name: 'Admin', email: 'admin@fithub.com', password: hashed, role: 'admin' });

  await Trainer.create([
    { name: 'Alex Morgan', bio: 'Strength & conditioning coach.', specialization: ['Strength','Conditioning'], experience: 8, pricePerSession: 35 },
    { name: 'Priya Singh', bio: 'Yoga and mobility specialist.', specialization: ['Yoga','Flexibility'], experience: 5, pricePerSession: 25 }
  ]);

  await Plan.create([
    { title: 'Beginner Full Body', description: '4-week intro program', durationWeeks: 4, price: 29, level: 'Beginner', category: 'Full Body' },
    { title: 'Advanced Hypertrophy', description: '12-week mass building', durationWeeks: 12, price: 99, level: 'Advanced', category: 'Strength' }
  ]);

  console.log('Seed complete');
  process.exit();
};

run().catch(err => {
  console.error(err);
  process.exit(1);
});
