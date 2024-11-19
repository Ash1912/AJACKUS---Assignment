import axios from 'axios';

const API_BASE = 'https://jsonplaceholder.typicode.com/users';

// Add a new user
export const addUser = async (user) => {
    try {
      const { data } = await axios.post(API_BASE, user);
      return data;  // Return the added user data
    } catch (error) {
      console.error('Error adding user:', error);
      throw error;
    }
  };
  
  // Edit an existing user
  export const editUser = async (id, user) => {
    try {
      const { data } = await axios.put(`${API_BASE}/${id}`, user);
      return data;  // Return the updated user data
    } catch (error) {
      console.error('Error editing user:', error);
      throw error;
    }
  };

  export const getUserById = async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    return await response.json();
  };
  
  // Fetch all users
  export const getUsers = async (page = 1, limit = 5) => {
    try {
      const { data } = await axios.get(`${API_BASE}?_page=${page}&_limit=${limit}`);
      return data;
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  };
  
// Delete a user
export const deleteUser = async (id) => {
  await axios.delete(`${API_BASE}/${id}`);
};
