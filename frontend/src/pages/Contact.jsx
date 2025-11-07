import React, { useState } from 'react';
import API from '../services/api';

const Contact = () => {
  const [form, setForm] = useState({ name:'', email:'', message:''});
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/contact', form);
      setSent(true);
      setForm({ name:'', email:'', message:'' });
    } catch (err) {
      alert('Error sending message');
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Contact us</h2>
      {sent && <div className="bg-green-100 p-3 rounded mb-3">Message sent. We'll respond soon.</div>}
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow max-w-xl">
        <input className="w-full border rounded px-3 py-2 mb-3" placeholder="Your name" value={form.name} onChange={e=>setForm({...form, name: e.target.value})} />
        <input className="w-full border rounded px-3 py-2 mb-3" placeholder="Email" value={form.email} onChange={e=>setForm({...form, email: e.target.value})} />
        <textarea className="w-full border rounded px-3 py-2 mb-3" placeholder="Message" value={form.message} onChange={e=>setForm({...form, message: e.target.value})} />
        <button className="px-4 py-2 bg-indigo-600 text-white rounded">Send</button>
      </form>
    </div>
  );
};

export default Contact;
