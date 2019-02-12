import React, { Component } from 'react';
import Img from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Project extends Component {
  constructor(props) {
    super(props);
  }

  renderTechnologies = () => {
    return this.props.technologies.map((t, i) => {
      return (
        <span key={i}>
          <strong>{t}</strong>
        </span>
      )
    })
  }

  render() {
    const { projectLink, imgURL, description, githubLink } = this.props;

    return (
      <div className="col-1-of-1 projects__project">
        <a href={projectLink}>
          <Img className="projects__image" fixed={imgURL} />
        </a>
        <div className="projects__description">
          <p>{description}</p>
          <p>Technologies used: {this.renderTechnologies}</p>
        </div>
        <div className="projects__links">
          <a className="projects__link" href={projectLink}>Demo</a>
          <a href={githubLink}>
            <FontAwesomeIcon icon={["fab", "github"]} size='lg' />
          </a>
        </div>
      </div>
    )
  }
}

