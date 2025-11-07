import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import API from '../services/api';

const UserDashboard = () => {
  const { user } = useContext(AuthContext);
  const [membership, setMembership] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await API.get('/memberships/me');
        setMembership(res.data);
      } catch (err) {
        setMembership(null);
      }
    };
    fetch();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-semibold">Hi, {user.name}</h2>
      <div className="mt-4">
        <h3 className="font-semibold">Your membership</h3>
        {membership ? (
          <div className="bg-white p-4 rounded shadow mt-2">
            <p>Plan: {membership.plan}</p>
            <p>Status: {membership.status}</p>
            <p>From: {new Date(membership.startDate).toLocaleDateString()}</p>
            <p>To: {new Date(membership.endDate).toLocaleDateString()}</p>
          </div>
        ) : (
          <p className="mt-2 text-gray-500">No active membership</p>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;
