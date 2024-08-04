import React from 'react'

function CreateUser() {
  return (
    <>
      <div className="d-flex vh-100 bg-info justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-3">
          <form>
            <h2>Add Company</h2>
            <div className="mb-2">
              <label htmlFor="">Company</label>
              <input
                type="text"
                placeholder="Enter Company Name"
                className="form-control"
              />
            </div>

            <div className="mb-2">
              <label htmlFor="">Website</label>
              <input
                type="text"
                placeholder="Enter Website"
                className="form-control"
              />
            </div>

            <div className="mb-2">
              <label htmlFor="">Contact</label>
              <input
                type="text"
                placeholder="Enter Name of Contact"
                className="form-control"
              />
            </div>
            <button className='btn btn-success'>Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default CreateUser
