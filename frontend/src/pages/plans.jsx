import React, { useEffect, useState } from 'react';
import API from '../services/api';
import PlanCard from '../components/PlanCard';

const Plans = () => {
  const [plans, setPlans] = useState([]);
  const [q, setQ] = useState('');
  const [loading, setLoading] = useState(true); // optional: show loader
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPlans();
  }, []);

  const fetchPlans = async () => {
    try {
      setLoading(true);
      const res = await API.get('/plans', { params: { q } }); // calls /api/plans
      setPlans(res.data);
    } catch (err) {
      console.error('Error fetching plans:', err);
      setError('Failed to load plans');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchPlans();
  };

  if (loading) return <p>Loading plans...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Workout Plans</h2>
      <form onSubmit={handleSearch} className="mb-4 flex gap-2">
        <input
          className="border rounded px-3 py-2 flex-1"
          placeholder="Search plans..."
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
        <button className="px-3 py-2 bg-indigo-600 text-white rounded">Search</button>
      </form>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {plans.length > 0 ? (
          plans.map((p) => <PlanCard key={p._id} p={p} />)
        ) : (
          <p>No plans found.</p>
        )}
      </div>
    </div>
  );
};

export default Plans;
