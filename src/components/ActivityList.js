// src/components/ActivityList.js
import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const ActivityList = ({ addToItinerary }) => {
  const data = useStaticQuery(graphql`
    query {
      allSanityActivity {
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
      <h2>Activities</h2>
      <ul>
        {data.allSanityActivity.nodes.map((activity) => (
          <li key={activity.name}>
            <h3>{activity.name}</h3>
            <p>{activity.description}</p>
            <p>Price: ${activity.price}</p>
            <GatsbyImage
              image={getImage(activity.image.asset.gatsbyImageData)}
              alt={activity.name}
            />
            <button onClick={() => addToItinerary(activity)}>
              Add to Itinerary
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ActivityList