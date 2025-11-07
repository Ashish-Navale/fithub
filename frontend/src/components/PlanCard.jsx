import React from 'react';

const PlanCard = ({ p }) => {
  return (
    <div className="border rounded-lg shadow p-4 flex flex-col justify-between">
      <h3 className="text-xl font-bold mb-2">{p.title}</h3>
      {p.level && <p className="text-sm text-gray-500 mb-1">Level: {p.level}</p>}
      {p.category && <p className="text-sm text-gray-500 mb-1">Category: {p.category}</p>}
      {p.durationWeeks !== undefined && <p className="text-sm text-gray-500 mb-1">Duration: {p.durationWeeks} week(s)</p>}
      {p.price !== undefined && <p className="text-sm text-gray-500 mb-2">Price: ₹{p.price}</p>}
      {p.description && <p className="text-gray-700 mb-2">{p.description}</p>}
      <button className="mt-auto bg-indigo-600 text-white px-3 py-2 rounded hover:bg-indigo-700">
        View Plan
      </button>
    </div>
  );
};

export default PlanCard;
