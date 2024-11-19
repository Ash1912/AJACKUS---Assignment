import React, { useState } from 'react';
import { addUser } from '../services/api';
import { useNavigate } from 'react-router-dom';
import '../styles/Form.css';

const AddUser = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const navigate = useNavigate();

  // Submit form data
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addUser(formData); // Add user via API
      navigate('/', { state: { notification: 'User added successfully!' } }); // Redirect with a flag
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <h2>Add User</h2>
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
      />
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
