export default {
  name: 'endorsement',
  title: 'Endorsement',
  type: 'document',
  fields: [
    {
      name: 'influencerName',
      title: 'Influencer Name',
      type: 'string',
    },
    {
      name: 'influencerImage',
      title: 'Influencer Image',
      type: 'image',
    },
    {
      name: 'endorsementText',
      title: 'Endorsement Text',
      type: 'text',
    },
  ],
}