// src/components/ReportingForm.js
import React, { useState } from 'react'

const ReportingForm = () => {
  const [formData, setFormData] = useState({
    description: '',
    anonymous: false,
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission (e.g., send data to a backend or email service)
    console.log(formData)
    // Reset form data after submission
    setFormData({ description: '', anonymous: false })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="description">
          Please describe the incident or concern:
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <div>
        <label htmlFor="anonymous">
          <input
            type="checkbox"
            id="anonymous"
            name="anonymous"
            checked={formData.anonymous}
            onChange={handleChange}
          />
          Report anonymously
        </label>
      </div>
      <button type="submit">Submit Report</button>
    </form>
  )
}

export default ReportingForm