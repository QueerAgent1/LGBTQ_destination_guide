import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const InteractiveMap = ({ destinations, events, accommodations, activities }) => {
  const markers = [
    ...destinations.map((destination) => ({
      ...destination.location,
      name: destination.name,
      type: 'destination',
    })),
    ...events.map((event) => ({
      ...event.location,
      name: event.name,
      type: 'event',
    })),
    ...accommodations.map((accommodation) => ({
      ...accommodation.location,
      name: accommodation.name,
      type: 'accommodation',
    })),
    ...activities.map((activity) => ({
      ...activity.location,
      name: activity.name,
      type: 'activity',
    })),
  ]

  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '500px' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
      />
      {markers.map((marker, index) => (
        <Marker key={index} position={[marker.lat, marker.lng]}>
          <Popup>
            <h3>{marker.name}</h3>
            <p>Type: {marker.type}</p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}

export default InteractiveMap