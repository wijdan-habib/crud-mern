import React, { useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function AddUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const { id } = useParams();

  const handleFormInput = async (e) => {
    e.preventDefault();

    // Form validation (optional)
    if (!name || !email || !phone ) {
      alert('Please fill in all fields');
      return;
    }

    try {
      // Send PUT request
      const response = await axios.put(`http://localhost:5000/api/update/user/${id}`, {
        name,
        email,
        phone
      });

      // Handle response
      toast.success(response.data.message, { position: 'top-right' });
      // Optionally redirect or clear form
      setName('');
      setEmail('');
      setPhone('');
    } catch (error) {
      console.error('There was an error updating the user:', error);
      toast.error('Error updating user', { position: 'top-right' });
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
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Phone</label>
                <input
                  type="number"
                  className="form-control"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
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