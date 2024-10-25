// src/pages/forum.js
import React from 'react'
import Layout from '../components/Layout'

const ForumPage = () => {
  return (
    <Layout>
      <h1>Community Forum</h1>
      <div>
        {/* Embed Flarum forum here */}
        <iframe
          src="https://your-flarum-domain.com"
          width="100%"
          height="800"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </Layout>
  )
}

export default ForumPage