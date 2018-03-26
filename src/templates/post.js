import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

const propTypes = {
  data: PropTypes.object
};

class Template extends React.Component {
  render() {
    const post = this.props.data.contentfulPost;
    const { id, title, date, content } = post;

    return (
      <div className="post">
        <h1 className="post__title">{title}</h1>
        <p className="post__date">{date}</p>
        <div className="post__content"
          dangerouslySetInnerHTML={{ __html: content.childMarkdownRemark.html }}
        />
        <Link className="post__link" to="/blog/">Back to blog</Link>
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
