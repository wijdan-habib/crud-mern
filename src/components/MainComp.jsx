import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function MainComp() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/routes");
        setUser(response.data);
      } catch (error) {
        console.log('error while fetching data', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <table className="table table-bordered">
              <thead style={{ color: 'red' }}>
                <tr>
                  <th scope="col">S.No</th>
                  <th scope="col">Name</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Email</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {user.map((user, index) => (
                  <tr key={user.id}>
                    <td>{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.phone}</td>
                    <td>{user.email}</td>
                    <td>
                    <Link to={`update-user/${user._id}`}>
                      <i className="fa-solid fa-pen-to-square"></i>
                    </Link> |
                      <Link><i className="fa-solid fa-trash"></i></Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="d-flex justify-content-center">
              <Link to='/add-user' className="btn btn-secondary">Add User</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
