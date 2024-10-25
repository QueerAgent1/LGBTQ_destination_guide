import React from 'react'
import Layout from '../components/Layout'
import ItineraryBuilder from '../components/ItineraryBuilder'
import ItineraryMap from '../components/ItineraryMap'
import DestinationList from '../components/DestinationList'
import EventList from '../components/EventList'
import AccommodationList from '../components/AccommodationList'
import ActivityList from '../components/ActivityList'

const ItineraryPage = () => {
  const [itinerary, setItinerary] = useState([])

  const addToItinerary = (item) => {
    setItinerary([...itinerary, item])
  }

  return (
    <Layout>
      <ItineraryBuilder
        itinerary={itinerary}
        addToItinerary={addToItinerary}
      />
      <ItineraryMap itinerary={itinerary} />
      <DestinationList addToItinerary={addToItinerary} />
      <EventList addToItinerary={addToItinerary} />
      <AccommodationList addToItinerary={addToItinerary} />
      <ActivityList addToItinerary={addToItinerary} />
    </Layout>
  )
}

export default ItineraryPage