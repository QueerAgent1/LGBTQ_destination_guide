/ src/components/DestinationList.js
2import React from 'react'
3import { graphql, useStaticQuery } from 'gatsby'
4import { GatsbyImage, getImage } from 'gatsby-plugin-image'
5
6const DestinationList = ({ addToItinerary }) => {
7  const data = useStaticQuery(graphql`
8    query {
9      allSanityDestination {
10        nodes {
11          name
12          description
13          location {
14            lat
15            lng
16          }
17          image {
18            asset {
19              gatsbyImageData(
20                width: 600
21                placeholder: BLURRED
22                formats: [AUTO, WEBP, AVIF]
23              )
24            }
25          }
26        }
27      }
28    }
29  `)
30
31  return (
32    <div>
33      <h2>Destinations</h2>
34      <ul>
35        {data.allSanityDestination.nodes.map((destination) => (
36          <li key={destination.name}>
37            <h3>{destination.name}</h3>
38            <p>{destination.description}</p>
39            <GatsbyImage
40              image={getImage(destination.image.asset.gatsbyImageData)}
41              alt={destination.name}
42            />
43            <button onClick={() => addToItinerary(destination)}>
44              Add to Itinerary
45            </button>
46          </li>
  47      </ul>
  12      <Link to="/consultation" className="cta-button">
  13        Request a Consultation
  14      </Link>
  15    </div>
  16  )
  17}
  18
  19export default DestinationList