// src/pages/resources.js
import React from 'react'
import Layout from '../components/Layout'
import Resources from '../components/Resources'
import DestinationInfo from '../components/DestinationInfo'

const ResourcesPage = () => {
  return (
    <Layout>
      <Resources />
      <DestinationInfo />
    </Layout>
  )
}

export default ResourcesPage