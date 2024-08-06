import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Users() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:8080/')
      .then((result) => setUsers(result.data))
      .catch((error) => console.log(error))
  }, [])
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
              {
              users.map((user) => {
                return (
                  <tr key={Math.random()}>
                    <td>{user.company}</td>
                    <td>{user.website}</td>
                    <td>{user.contact}</td>
                    <td>
                      <Link to="/update" className="btn btn-success">
                        Update
                      </Link>
                      <button className="btn btn-danger" >Delete</button>
                    </td>
                  </tr>
                )
              })
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
