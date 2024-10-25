import React from 'react'
import Layout from '../components/Layout'
import AccommodationList from '../components/AccommodationList'

const AccommodationsPage = ({ data }) => {
  const accommodations = data.allSanityAccommodation.nodes

  return (
    <Layout>
      <h1>Accommodations</h1>
      <AccommodationList accommodations={accommodations} />
    </Layout>
  )
}

export const query = graphql`
  query {
    allSanityAccommodation {
      nodes {
        id
        name
        description
        location {
          lat
          lng
        }
        image {
          asset {
            gatsbyImageData(
              width: 600
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
        price
      }
    }
  }
`

export default AccommodationsPage