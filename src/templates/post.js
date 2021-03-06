import React from 'react';
import Link from 'gatsby-link';
import { graphql } from 'gatsby';

class Template extends React.Component {
  render() {
    const post = this.props.data.contentfulPost;
    const { title, date, content } = post;

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
