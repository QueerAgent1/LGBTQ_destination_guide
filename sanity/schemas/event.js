export default {
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'geopoint',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
  ],
}