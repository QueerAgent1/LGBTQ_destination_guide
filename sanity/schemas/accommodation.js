export default {
  name: 'accommodation',
  title: 'Accommodation',
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
      name: 'location',
      title: 'Location',
      type: 'geopoint',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
  ],
}