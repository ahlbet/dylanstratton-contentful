import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import ReactAudioPlayer from 'react-audio-player';

const propTypes = {
  data: PropTypes.object
};

class Template extends React.Component {
  render() {
    const post = this.props.data.contentfulPost;
    const { title, date, content, audio } = post;

    return (
      <div>
        <h1>{title}</h1>
        <p>{date}</p>
        {audio ? (
          <div>
            <ReactAudioPlayer src={audio.file.url} controls />
          </div>
        ) : (
          <div>No audio</div>
        )}
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
      audio {
        file {
          url
          fileName
          contentType
        }
      }
    }
  }
`;
