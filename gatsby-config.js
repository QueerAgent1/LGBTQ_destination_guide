module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'your-sanity-project-id',
        dataset: 'your-sanity-dataset',
        watchMode: true,
        token: 'your-sanity-read-token',
      },
    },
  ],
}