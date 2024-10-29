import sanityClient from '@sanity/client'

const client = sanityClient({
  projectId: 'QueerLuxeTravelNetwork', // Replace with your Sanity project ID
  dataset: 'development', // Replace with your dataset name
  useCdn: true, // `false` if you want to ensure fresh data
  apiVersion: '2021-10-21', // use a UTC date string
})

export default client
