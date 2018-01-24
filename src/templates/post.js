import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
// import Img from 'gatsby-image';
import PropTypes from 'prop-types';

const propTypes = {
  data: PropTypes.object
};

class Template extends React.Component {
  render() {
    const post = this.props.data.contentfulPost;
    const { title, date, content } = post;

    return (
      <div>
        <h1>{title}</h1>
        <p>{date}</p>
        <div
          dangerouslySetInnerHTML={{ __html: content.childMarkdownRemark.html }}
        />
        <Link to="/blog/">Back to blog</Link>
      </div>
    );
  }
}

export default Template;

export const postQuery = graphql`
  query blogPostQuery($id: String!) {
    contentfulPost(id: { eq: $id }) {
      title
      date
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
