import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
      <div>
        <h1 className="text-4xl font-bold">Welcome to FitHub</h1>
        <p className="mt-4 text-gray-600">Train smarter, stay stronger. Explore trainers, plans, and memberships tailored for you.</p>
        <div className="mt-6">
          <Link to="/plans" className="px-5 py-3 bg-indigo-600 text-white rounded">View Plans</Link>
        </div>
      </div>
      <div>
        <img src="https://images.unsplash.com/photo-1554284126-aa88f22d8b1c?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=3c2b2f8af1f0d96f167b849f0b9a7f3f" alt="fitness" className="rounded shadow" />
      </div>
    </section>
  </div>
);

export default Home;
