import React, { Component } from 'react';
import Img from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Project extends Component {
  constructor(props) {
    super(props);
  }

  renderTechnologies = () => {
    const { technologies } = this.props;
    return technologies.map((t, i) => {
      return (
        <span key={i}>
          <strong>{t}{i !== technologies.length - 1 && " & "}</strong>
        </span>
      )
    })
  }

  render() {
    const { projectLink, description, githubLink, imgName, data } = this.props;

    return (
      <div className="col-1-of-1 projects__project">
        <a href={projectLink}>
          <Img className="projects__image" fixed={data[imgName].childImageSharp.fixed} />
        </a>
        <div className="projects__description">
          <p>{description}</p>
          <p>Technologies used: {this.renderTechnologies()}</p>
        </div>
        <div className="projects__links">
          <a className="projects__link" href={projectLink}>Demo</a>
          <a className="projects__link" href={githubLink}>
            <FontAwesomeIcon icon={["fab", "github"]} size='lg' />
          </a>
        </div>
      </div>
    )
  }
}

