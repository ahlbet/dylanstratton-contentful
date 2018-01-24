const path = require('path');

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;
  const postTemplate = path.resolve('src/templates/post.js');

  return graphql(`
    {
      allContentfulPost {
        edges {
          node {
            id
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) {
      return Promise.reject(res.errors);
    }

    res.data.allContentfulPost.edges.forEach(({ node }) => {
      createPage({
        path: `/blog/${node.id}`,
        component: postTemplate,
        context: {
          id: node.id
        }
      });
    });
  });
};
