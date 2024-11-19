import React, { useState, useEffect } from 'react';
import { editUser, getUserById } from '../services/api';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/Form.css';

const EditUser = () => {
  const { id } = useParams(); // Get user ID from URL
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '' });

  // Fetch user data based on ID
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await getUserById(id); // Fetch all users
        // const user = users.find((u) => u.id === parseInt(id)); // Find user by ID
        if (user) {
          setFormData({ name: user.name, email: user.email }); // Set form fields with user data
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUser();
  }, [id]);

  // Submit edited user data
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await editUser(id, formData); // Send updated data to API
      navigate('/', { state: { notification: 'User updated successfully!' } }); // Redirect with a notification flag
    } catch (error) {
      console.error('Error editing user:', error);
    }
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <h2>Edit User</h2>
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
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditUser;
