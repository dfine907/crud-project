import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

function UpdateUser() {
  const { id } = useParams()

  const [company, setCompany] = useState('')
  const [website, setWebsite] = useState('')
  const [contact, setContact] = useState('')

  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get(`http://localhost:8080/getUser/${id}`)
      .then((result) => {console.log(result)
        setCompany(result.data.company)
        setWebsite(result.data.website)
        setContact(result.data.contact)      })
      .catch((error) => console.log(error))
  }, [id])

  const updateHandler = async (event) => {
    event.preventDefault()
    try {
      const result = await axios.put(
        `http://localhost:8080/updateUser/${id}`,
        {
          company,
          website,
          contact,
        }
      )
      console.log(result)
      navigate('/')
    } catch (error) {
      console.error('Error creating user:', error)
    }
  }

  return (
    <>
      <div className="d-flex vh-100 bg-info justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-3">
          <form onSubmit={updateHandler}>
            <h2>Update Company</h2>
            <div className="mb-2">
              <label htmlFor="">Company</label>
              <input
                type="text"
                placeholder="Update Company Name"
                className="form-control"
                value={company}
                onChange={(event) => setCompany(event.target.value)}
              />
            </div>

            <div className="mb-2">
              <label htmlFor="">Website</label>
              <input
                type="text"
                placeholder="Update Website"
                className="form-control"
                value={website}
                onChange={(event) => setWebsite(event.target.value)}
              />
            </div>

            <div className="mb-2">
              <label htmlFor="">Contact</label>
              <input
                type="text"
                placeholder="Update Name of Contact"
                className="form-control"
                value={contact}
                onChange={(event) => setContact(event.target.value)}
              />
            </div>
            <button className="btn btn-success">Update</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default UpdateUser
