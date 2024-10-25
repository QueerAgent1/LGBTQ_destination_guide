// src/components/EventList.js
import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const EventList = ({ addToItinerary }) => {
  const data = useStaticQuery(graphql`
    query {
      allSanityEvent {
        nodes {
          name
          description
          date(formatString: "MMMM DD, YYYY")
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
        }
      }
    }
  `)

  return (
    <div>
      <h2>Upcoming Events</h2>
      <ul>
        {data.allSanityEvent.nodes.map((event) => (
          <li key={event.name}>
            <h3>{event.name}</h3>
            <p>{event.description}</p>
            <p>Date: {event.date}</p>
            <GatsbyImage
              image={getImage(event.image.asset.gatsbyImageData)}
              alt={event.name}
            />
            <button onClick={() => addToItinerary(event)}>
              Add to Itinerary
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default EventList