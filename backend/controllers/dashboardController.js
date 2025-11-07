const Trainer = require('../models/Trainer');
const Plan = require('../models/Plan');
const Membership = require('../models/Membership');

exports.getDashboardStats = async (req, res) => {
  try {
    const totalTrainers = await Trainer.countDocuments();
    const totalPlans = await Plan.countDocuments();
    const totalMemberships = await Membership.countDocuments();
    const activeMemberships = await Membership.countDocuments({ active: true });

    // Membership count per plan (populate plan to get title)
    const membershipsPerPlan = await Membership.aggregate([
      {
        $lookup: {
          from: 'plans',             // collection name in MongoDB
          localField: 'plan',
          foreignField: '_id',
          as: 'planDetails'
        }
      },
      { $unwind: '$planDetails' },
      { $group: { _id: '$planDetails.title', count: { $sum: 1 } } }
    ]);

    res.json({
      totalTrainers,
      totalPlans,
      totalMemberships,
      activeMemberships,
      membershipsPerPlan
    });
  } catch (err) {
    console.error('Dashboard fetch error:', err);
    res.status(500).json({ message: 'Server Error' });
  }
};
