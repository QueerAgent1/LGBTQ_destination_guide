import React from 'react'
import Layout from '../components/Layout'
import EventList from '../components/EventList'

const EventsPage = ({ data }) => {
  const events = data.allSanityEvent.nodes

  return (
    <Layout>
      <h1>Events</h1>
      <EventList events={events} />
    </Layout>
  )
}

export const query = graphql`
  query {
    allSanityEvent {
      nodes {
        id
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
`

export default EventsPage