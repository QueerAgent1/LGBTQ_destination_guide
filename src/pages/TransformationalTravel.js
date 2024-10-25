import React from 'react'
2import DestinationList from './DestinationList'
3
4const TransformationalTravel = ({ destinations }) => {
5  return (
6    <div>
7      <p>
8        At Queer Luxe Travel, we believe that travel has the power to transform lives and broaden perspectives. Our curated experiences are designed to foster personal growth, cultural immersion, and a deeper understanding of the world around us.
9      </p>
10      <ul>
11        <li>Immersive cultural experiences and workshops</li>
12        <li>Mindfulness and wellness retreats</li>
13        <li>Volunteer and service-learning opportunities</li>
14        <li>Educational tours and seminars</li>
15        <li>Opportunities for self-discovery and personal growth</li>
16      </ul>
17      <h2>Destinations with Transformational Experiences</h2>
18      <DestinationList destinations={destinations} />
19    </div>
20  )
21}
22
23export default TransformationalTravel