import React, { useState, useEffect } from 'react';
import { getUsers, deleteUser } from '../services/api';
import { useNavigate, useLocation } from 'react-router-dom';
import Pagination from './Pagination';
import Notification from './Notification';
import '../styles/UserList.css';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [notification, setNotification] = useState('');
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const location = useLocation(); // Access redirect state

  // Fetch users when page changes
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers(page);
        setUsers(data);
      } catch {
        setNotification('Failed to fetch users');
      }
    };
    fetchUsers();
    // Check if redirected with a notification
    if (location.state?.notification) {
      setNotification(location.state.notification);
      // Reset location state to avoid duplicate notifications
      window.history.replaceState({}, document.title);
    }
  }, [page, location.state]);

  // Automatically clear notification after 3 seconds
  useEffect(() => {
    if (notification) {
      const timeout = setTimeout(() => setNotification(''), 3000);
      return () => clearTimeout(timeout); // Clear timeout if component unmounts
    }
  }, [notification]);

  // Handle delete user
  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      setNotification('User deleted successfully');
      setUsers(users.filter((user) => user.id !== id));
    } catch {
      setNotification('Failed to delete user');
    }
  };

  return (
    <div className="user-list-container">
      <h2>User Management Dashboard</h2>
      {notification && <Notification message={notification} />}

      <div className="action-buttons">
        <button onClick={() => navigate('/add')} className="add-user-btn">
          Add User
        </button>
      </div>

      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            const [firstName, ...lastNameParts] = (user.name || '').split(' ');
            const lastName = lastNameParts.join(' ');

            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{firstName || 'N/A'}</td>
                <td>{lastName || 'N/A'}</td>
                <td>{user.email}</td>
                <td>IT</td>
                <td>
                  <button
                    className="edit-btn"
                    onClick={() => navigate(`/edit/${user.id}`)}
                  >
                    Edit
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination page={page} setPage={setPage} />
    </div>
  );
};

export default UserList;
