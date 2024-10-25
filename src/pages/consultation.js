1// src/pages/consultation.js
2import React from 'react'
3import Layout from '../components/Layout'
4import ConsultationForm from '../components/ConsultationForm'
5
6const ConsultationPage = () => {
7  return (
8    <Layout>
9      <h1>Request a Consultation</h1>
10      <p>
11        Let our expert travel designers create a personalized itinerary tailored to your preferences. Fill out the form below, and we'll get in touch with you to discuss your dream vacation.
12      </p>
13      <ConsultationForm />
14    </Layout>
15  )
16}
17
18export default ConsultationPage

