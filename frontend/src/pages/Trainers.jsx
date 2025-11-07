import React, { useEffect, useState } from 'react';
import API from '../services/api';
import TrainerCard from '../components/TrainerCard';

const Trainers = () => {
  const [trainers, setTrainers] = useState([]);
  const [q, setQ] = useState('');

  useEffect(() => {
    fetchTrainers();
  }, []);

  const fetchTrainers = async () => {
    const res = await API.get('/trainers', { params: { q } });
    setTrainers(res.data);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    fetchTrainers();
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Trainers</h2>
      <form onSubmit={handleSearch} className="mb-4 flex gap-2">
        <input className="border rounded px-3 py-2 flex-1" placeholder="Search trainers..." value={q} onChange={e => setQ(e.target.value)} />
        <button className="px-3 py-2 bg-indigo-600 text-white rounded">Search</button>
      </form>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {trainers.map(t => <TrainerCard key={t._id} t={t} />)}
      </div>
    </div>
  );
};

export default Trainers;
