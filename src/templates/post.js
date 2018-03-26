import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
<<<<<<< HEAD
=======
// import ReactAudioPlayer from 'react-audio-player';
// import Audio from 'react-audioplayer';
// import AudioPlayer from 'react-h5-audio-player';
>>>>>>> 76186a8a049db3837718a08a56425b2872da1543

const propTypes = {
  data: PropTypes.object
};

{
  /* <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/382587416&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe> */
}

const audioPlayerStyle = {
  background: 'red',
  color: 'white'
};

class Template extends React.Component {
  render() {
    const post = this.props.data.contentfulPost;
<<<<<<< HEAD
    const { id, title, date, content } = post;
=======
    const { title, date, content, audio, soundcloudLink } = post;
    const playlist = [
      {
        name: title,
        src: audio.file.src
      }
    ];
>>>>>>> 76186a8a049db3837718a08a56425b2872da1543

    return (
      <div className="post">
        <h1>{title}</h1>
        <p>{date}</p>
<<<<<<< HEAD
=======
        {audio ? (
          // <div>
          //   <ReactAudioPlayer
          //     src={audio.file.url}
          //     controls
          //     style={audioPlayerStyle}
          //   />
          // </div>
          <div>
            {console.log(soundcloudLink)}
            
          </div>
        ) : (
          <div>No audio</div>
        )}
>>>>>>> 76186a8a049db3837718a08a56425b2872da1543
        <div
          dangerouslySetInnerHTML={{ __html: content.childMarkdownRemark.html }}
        />
        {soundcloudLink ? (
          <div className="audio-player" dangerouslySetInnerHTML={{ __html: soundcloudLink.soundcloudLink }} />
        ) : (
          <div>No audio</div>
        )
        }
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
      soundcloudLink {
        soundcloudLink
      }
    }
  }
`;
