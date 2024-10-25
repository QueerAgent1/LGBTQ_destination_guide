// src/pages/policies.js
import React from 'react'
import Layout from '../components/Layout'
import ReportingForm from '../components/ReportingForm'

const PoliciesPage = () => {
  return (
    <Layout>
      <h1>Code of Ethics and Non-Discrimination Policy</h1>
      {/* ... (Code of Ethics and Non-Discrimination Policy content) */}
      <h2>Report an Incident or Concern</h2>
      <p>
        If you experience or witness any form of discrimination, harassment, or
        unethical behavior during your travel experience with Queer Luxe Travel,
        please report it using the form below. You can choose to report
        anonymously if you prefer.
      </p>
      <ReportingForm />
    </Layout>
  )
}

export default PoliciesPage