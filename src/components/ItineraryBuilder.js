import React, { useState } from 'react'

const ItineraryBuilder = () => {
  const [itinerary, setItinerary] = useState([])
  
  const addToItinerary = (item) => {
    setItinerary([...itinerary, item])
  }
  
  const removeFromItinerary = (index) => {
    const updatedItinerary = [...itinerary]
    updatedItinerary.splice(index, 1)
    setItinerary(updatedItinerary)
  }
  
  const clearItinerary = () => {
    setItinerary([])
  }
  
  return (
    <div>
    <h2>Build Your Itinerary</h2>
    {itinerary.length === 0 ? (
      <p>Your itinerary is currently empty.</p>
    ) : (
      <ul>
      {itinerary.map((item, index) => (
        <li key={index}>
        <div className="itinerary-item">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        {item.price && <p>Price: ${item.price}</p>}
        <button onClick={() => removeFromItinerary(index)}>
        Remove
        </button>
        </div>
        </li>
      ))}
      </ul>
    )}
    <button onClick={clearItinerary}>Clear Itinerary</button>
    {/* Render components for adding destinations, events, accommodations, and activities */}
    </div>
  )
}

export default ItineraryBuilder
  export default Footer