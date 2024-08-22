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

  
  const deleteHandler = (id) => {
    axios
      .delete(`http://localhost:8080/deleteUser/${id}`)
      .then((result) => {
        console.log(result)
        setUsers(
          users.filter((user) => {
            return user._id !== id
          })
        )
      })
      .catch((error) => console.log(error))
  }

  return (
    <>
      <div className="d-flex vh-100 bg-secondary justify-content-center align-items-center">
        <div className="w-50 shadow-lg bg-white rounded p-3">

          <Link to="/create" className="btn btn-success">
            ADD +
          </Link>

          <table className="table">
            <thead>
              <tr>
                <th>Company</th>
                <th>Website</th>
                <th>Contact</th>
                <th>Edit Company</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => {
                return (
                  <tr key={user._id}>
                    <td>{user.company}</td>
                    <td>{user.website}</td>
                    <td>{user.contact}</td>
                    <td>
                      <Link
                        to={`/update/${user._id}`}
                        className="btn btn-success m-1"
                      >
                        Update
                      </Link>
                      
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteHandler(user._id)}
                      >
                        Delete
                      </button>
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
