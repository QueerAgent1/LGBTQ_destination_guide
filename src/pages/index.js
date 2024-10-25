// src/pages/index.js
import React from 'react'
import Layout from '../components/Layout'
import HeroSection from '../components/HeroSection'
import DestinationList from '../components/DestinationList'

const IndexPage = () => {
  return (
    <Layout>
    <HeroSection />
    <DestinationList />
    {/* Other page content */}
    </Layout>
  )
}

export default IndexPageimport React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import HeroSection from '../components/HeroSection'
import DestinationList from '../components/DestinationList'
import ForaPerks from '../components/ForaPerks'
import RegenerativeTravel from '../components/RegenerativeTravel'
import TransformationalTravel from '../components/TransformationalTravel'

const IndexPage = ({ data }) => {
  const destinations = data.allSanityDestination.nodes

  return (
    <Layout>
      <HeroSection />
      <DestinationList destinations={destinations} />
      <section className="component-container">
        <ForaPerks />
      </section>
      <section className="component-container">
        <RegenerativeTravel />
      </section>
      <section className="component-container">
        <TransformationalTravel />
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    allSanityDestination {
      nodes {
        id
        name
        description
        location {
          lat
          lng
        }
        slug
        image {
          asset {
            gatsbyImageData(
              width: 600
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  }
`

export default IndexPage