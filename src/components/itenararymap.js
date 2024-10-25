import React, { useEffect, useRef, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { FlyToInterpolator } from 'react-leaflet-flyto'

const ItineraryMap = ({ itinerary }) => {
  const [center, setCenter] = useState([51.505, -0.09])
  const mapRef = useRef(null)

  useEffect(() => {
    if (itinerary.length > 0) {
      const destination = itinerary[0]
      setCenter([destination.location.lat, destination.location.lng])
      flyToDestination(destination)
    }
  }, [itinerary])

  const flyToDestination = (destination) => {
    const map = mapRef.current
    if (map) {
      const { lat, lng } = destination.location
      map.flyTo([lat, lng], 15, {
        duration: 2,
        interpolator: FlyToInterpolator,
      })
    }
  }

  return (
    <MapContainer
      center={center}
      zoom={13}
      style={{ height: '500px' }}
      ref={mapRef}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
      />
      {itinerary.map((item, index) => (
        <Marker
          key={index}
          position={[item.location.lat, item.location.lng]}
          eventHandlers={{
            click: () => {
              flyToDestination(item)
            },
          }}
        >
          <Popup>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            {item.price && <p>Price: ${item.price}</p>}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}

export default ItineraryMap