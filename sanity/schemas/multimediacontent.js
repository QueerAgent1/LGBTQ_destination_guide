export default {
  name: 'multimediaContent',
  title: 'Multimedia Content',
  type: 'document',
  fields: [
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: ['video', 'audio', 'text'],
      },
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'text',
    },
  ],
}