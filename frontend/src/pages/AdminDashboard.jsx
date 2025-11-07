import React, { useEffect, useState } from 'react';
import API from '../services/api';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const AdminDashboard = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const { data } = await API.get('/dashboard'); // Fetch backend dashboard stats
        setStats(data);
      } catch (err) {
        console.error('Dashboard fetch failed', err);
      }
    };
    fetchStats();
  }, []);

  if (!stats) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>

      {/* Stat cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded shadow">Total Trainers: {stats.totalTrainers}</div>
        <div className="bg-white p-4 rounded shadow">Total Plans: {stats.totalPlans}</div>
        <div className="bg-white p-4 rounded shadow">Total Memberships: {stats.totalMemberships}</div>
        <div className="bg-white p-4 rounded shadow">Active Memberships: {stats.activeMemberships}</div>
      </div>

      {/* Memberships per plan chart */}
      <h3 className="text-xl font-semibold mb-2">Memberships Per Plan</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={stats.membershipsPerPlan}>
          <XAxis dataKey="_id" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#4f46e5" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AdminDashboard;
