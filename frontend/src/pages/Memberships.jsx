import React, { useState, useEffect } from 'react';
import API from '../services/api';

const MembershipCard = ({ membership }) => {
  return (
    <div className="border rounded-lg shadow p-4 flex flex-col justify-between hover:shadow-lg transition">
      <h3 className="text-xl font-bold mb-2">{membership.title}</h3>
      <p className="text-gray-700 mb-2">{membership.description}</p>
      <p className="text-sm text-gray-500 mb-1">
        Duration: {membership.durationMonths} month(s)
      </p>
      <p className="text-sm text-gray-500 mb-2">Price: ₹{membership.price}</p>
      {membership.perks && membership.perks.length > 0 && (
        <ul className="text-sm text-gray-600 mb-2 list-disc list-inside">
          {membership.perks.map((perk, idx) => (
            <li key={idx}>{perk}</li>
          ))}
        </ul>
      )}
      <button className="mt-auto bg-indigo-600 text-white px-3 py-2 rounded hover:bg-indigo-700">
        Subscribe
      </button>
    </div>
  );
};

const Memberships = () => {
  const [memberships, setMemberships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMemberships();
  }, []);

  const fetchMemberships = async () => {
    try {
      setLoading(true);
      const { data } = await API.get('/memberships');
      setMemberships(data);
    } catch (err) {
      console.error('Error fetching memberships:', err);
      setError('Failed to load memberships');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p className="text-center mt-4">Loading memberships...</p>;
  if (error) return <p className="text-center mt-4 text-red-500">{error}</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4 text-center">Membership Plans</h2>
      {memberships.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {memberships.map((m) => (
            <MembershipCard key={m._id} membership={m} />
          ))}
        </div>
      ) : (
        <div className="text-center mt-8 text-gray-500">
          <p>No memberships found 😔</p>
        </div>
      )}
    </div>
  );
};

export default Memberships;
