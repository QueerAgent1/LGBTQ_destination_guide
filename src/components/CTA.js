import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import TransformationalTravel from '../components/TransformationalTravel'

const TransformationalTravelPage = ({ data }) => {
  const destinations = data.allSanityDestination.nodes

  return (
    <Layout>
      <h1>Transformational Travel</h1>
      <TransformationalTravel destinations={destinations} />
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
        transformationalExperiences {
          name
          description
        }
      }
    }
  }
`

export default TransformationalTravelPage