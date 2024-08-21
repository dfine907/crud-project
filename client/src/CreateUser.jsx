import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function CreateUser() {
  const [company, setCompany] = useState('')
  const [website, setWebsite] = useState('')
  const [contact, setContact] = useState('')

  const navigate = useNavigate()

  // const submitHandler = (event) => {
  //   event.preventDefault()
  //   axios.post("http://localhost:8080/createUser", {company, website, contact})
  //   .then(result => console.log(result))
  //   .catch(error => console.log(error))
  // }

  const submitHandler = async (event) => {
    event.preventDefault()
    try {
      const result = await axios.post(
        'http://localhost:8080/createUser',
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
        <div className="shadow-lg w-50 bg-white rounded p-3">
          <form onSubmit={submitHandler}>
            <h2>Add Company</h2>
            <div className="mb-2">
              <label htmlFor="">Company</label>
              <input
                type="text"
                placeholder="Enter Company Name"
                className="form-control"
                onChange={(event) => setCompany(event.target.value)}
              />
            </div>

            <div className="mb-2">
              <label htmlFor="">Website</label>
              <input
                type="text"
                placeholder="Enter Website"
                className="form-control"
                onChange={(event) => setWebsite(event.target.value)}
              />
            </div>

            <div className="mb-2">
              <label htmlFor="">Contact</label>
              <input
                type="text"
                placeholder="Enter Name of Contact"
                className="form-control"
                onChange={(event) => setContact(event.target.value)}
              />
            </div>
            <button className="btn btn-success">Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default CreateUser
