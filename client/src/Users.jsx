import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Users() {
  const [users, setUsers] = useState([
    {
      Company: 'PulseTech',
      Website: 'http://pulsetech.com',
      Contact: 'Gino Rossi',
    },
  ])
  return (
    <>
      <div className="d-flex vh-100 bg-info justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-3">
          <Link to="/create" className="btn btn-success">
            ADD +
          </Link>
          <table className="table">
            <thead>
              <tr>
                <th>Company</th>
                <th>Website</th>
                <th>Contact</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => {
                return (
                  <tr key={Math.random()}>
                    <td>{user.Company}</td>
                    <td>{user.Website}</td>
                    <td>{user.Contact}</td>
                    <td>
                    <Link to='/update'className="btn btn-success" >Update</Link>
                      <button>Delete</button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
