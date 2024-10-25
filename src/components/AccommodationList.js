// src/components/AccommodationList.js
import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const AccommodationList = ({ addToItinerary }) => {
  const data = useStaticQuery(graphql`
    query {
      allSanityAccommodation {
        nodes {
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
  `)

  return (
    <div>
      <h2>Accommodations</h2>
      <ul>
        {data.allSanityAccommodation.nodes.map((accommodation) => (
          <li key={accommodation.name}>
            <h3>{accommodation.name}</h3>
            <p>{accommodation.description}</p>
            <p>Price: ${accommodation.price}</p>
            <GatsbyImage
              image={getImage(accommodation.image.asset.gatsbyImageData)}
              alt={accommodation.name}
            />
            <button onClick={() => addToItinerary(accommodation)}>
              Add to Itinerary
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AccommodationList