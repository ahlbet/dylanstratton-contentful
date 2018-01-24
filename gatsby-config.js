module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter'
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `dzgczwgd9ycy`,
        accessToken: `c0d9ab59b93ddcb4287f3a9728c0a44fbf6fc8a3b9da3b85cd380ca66d554796`
      }
    },
    'gatsby-plugin-react-helmet',
    `gatsby-transformer-remark`,
    `gatsby-plugin-sass`
  ]
};
