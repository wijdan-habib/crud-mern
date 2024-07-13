import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';

export default function UpdateUser() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const { userId } = useParams(); // Get userId from the URL params
  const navigate = useNavigate(); // Hook to programmatically navigate

  useEffect(() => {
    // Fetch user data if userId is available
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/update/user/${userId}`);
        const { name, phone, email } = response.data;
        setName(name);
        setPhone(phone);
        setEmail(email);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    if (userId) {
      fetchUserData();
    }
  }, [userId]);

  const handleFormInput = async (e) => {
    e.preventDefault();
    
    // Form validation (optional)
    if (!name || !phone || !email) {
      alert('Please fill in all fields');
      return;
    }

    try {
      // Send PUT request to update user
      const response = await axios.put(`http://localhost:5000/api/users/${userId}`, {
        name,
        phone,
        email
      });
      // Handle response
      console.log('User updated successfully:', response.data);
      alert('User updated successfully'); // Show alert message
      navigate('/'); // Redirect to home page or another route on success
    } catch (error) {
      // Handle error
      console.error('There was an error updating the user:', error);
    }
  };

  return (
    <div className='bg-primary'>
      <div className="container">
        <div className="row justify-content-center align-items-center min-vh-100">
          <div className="col-md-4">
            <form onSubmit={handleFormInput} className="border p-4 rounded shadow-sm bg-white">
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder={name || 'Enter name'}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Phone</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder={phone || 'Enter phone number'}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder={email || 'Enter email'}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className='d-flex justify-content-between'>
                <button type="submit" className="btn btn-primary">Update User</button>
                <Link to='/' className='btn btn-danger'>Go back</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
