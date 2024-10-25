// src/pages/email.js
import React from 'react'
import Layout from '../components/Layout'

const EmailPage = () => {
  return (
    <Layout>
      <h1>Email Client</h1>
      <div>
        {/* Embed Roundcube email client here */}
        <iframe
          src="https://your-roundcube-domain.com"
          width="100%"
          height="800"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </Layout>
  )
}

export default EmailPage