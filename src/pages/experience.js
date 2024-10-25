import React from 'react'
import Layout from '../components/Layout'
import InteractiveMap from '../components/InteractiveMap'
import UserReviews from '../components/UserReviews'
import PersonalizedRecommendations from '../components/PersonalizedRecommendations'
import ExclusiveDeals from '../components/ExclusiveDeals'
import Endorsements from '../components/Endorsements'
import MultimediaContent from '../components/MultimediaContent'

const ExperiencePage = ({ data }) => {
  const destinations = data.allSanityDestination.nodes
  const recommendations = data.allSanityRecommendation.nodes
  const deals = data.allSanityDeal.nodes
  const endorsements = data.allSanityEndorsement.nodes
  const multimediaContent = data.allSanityMultimediaContent.nodes

  return (
    <Layout>
      <h1>Immersive Experience</h1>
      <InteractiveMap destinations={destinations} />
      <UserReviews destination={destinations[0]} />
      <PersonalizedRecommendations recommendations={recommendations} />
      <ExclusiveDeals deals={deals} />
      <Endorsements endorsements={endorsements} />
      <MultimediaContent content={multimediaContent} />
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
        virtualTourImages {
          asset {
            url
          }
        }
      }
    }
    allSanityRecommendation {
      nodes {
        id
        name
        description
      }
    }
    allSanityDeal {
      nodes {
        id
        name
        description
        price
      }
    }
    allSanityEndorsement {
      nodes {
        id
        influencerName
        influencerImage {
          asset {
            url
          }
        }
        endorsementText
      }
    }
    allSanityMultimediaContent {
      nodes {
        id
        type
        url
        content
      }
    }
  }
`

export default ExperiencePage