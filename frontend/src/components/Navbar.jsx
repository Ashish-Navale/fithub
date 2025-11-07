import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const nav = useNavigate();

  const handleLogout = () => {
    logout();
    nav('/');
  };

  return (
    <nav className="bg-white shadow">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-indigo-600">FitHub</Link>
        <div className="space-x-4">
          <Link to="/trainers" className="hover:text-indigo-600">Trainers</Link>
          <Link to="/plans" className="hover:text-indigo-600">Plans</Link>
          <Link to="/memberships" className="hover:text-indigo-600">Memberships</Link>
          <Link to="/contact" className="hover:text-indigo-600">Contact</Link>
          {user ? (
            <>
              {user.role === 'admin' ? <Link to="/admin" className="ml-2">Admin</Link> : <Link to="/dashboard" className="ml-2">Dashboard</Link>}
              <button onClick={handleLogout} className="ml-3 px-3 py-1 bg-red-500 text-white rounded">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="px-3 py-1 border rounded">Login</Link>
              <Link to="/register" className="px-3 py-1 ml-2 bg-indigo-600 text-white rounded">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
