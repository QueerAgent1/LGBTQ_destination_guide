import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import RegenerativeTravel from '../components/RegenerativeTravel'

const RegenerativeTravelPage = ({ data }) => {
  const destinations = data.allSanityDestination.nodes

  return (
    <Layout>
      <h1>Regenerative Travel</h1>
      <RegenerativeTravel destinations={destinations} />
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
        regenerativeInitiatives {
          name
          description
        }
      }
    }
  }
`

export default RegenerativeTravelPage