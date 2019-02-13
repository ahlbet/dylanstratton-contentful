import React, { Component } from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import { graphql, StaticQuery } from 'gatsby';
import projectData from "../components/Projects/projectData";
import Project from "../components/Projects/Project";

export default class Projects extends Component {

  constructor(props) {
    super(props)
  }

  renderProjects = (data) => {
    return projectData.map((p, i) => {
      return (
        <Project
          key={i}
          projectLink={p.projectLink}
          technologies={p.technologies}
          githubLink={p.githubLink}
          description={p.description}
          data={data}
          imgName={p.imgName}
        />
      )
    })
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query ProjectsQuery {
            tripWe: file(relativePath: { eq: "tripWe.png" }) {
              ...fixedImageProjects
            },
            repeat: file(relativePath: { eq: "repeat1.png" }) {
              ...fixedImageProjects
            },
            theatreCode: file(relativePath: { eq: "theatre-code.png" }) {
              ...fixedImageProjects
            },
            skrine: file(relativePath: { eq: "skrine.png" }) {
              ...fixedImageProjects
            },
            gallery12: file(relativePath: { eq: "gallery12.png" }) {
              ...fixedImageProjects
            },
          }
        `}
        render={data => (
          <section id="projects" className="projects">
            <h2 className="projects__heading">
              Projects
            </h2>

            <div className="projects__list row">
              {this.renderProjects(data)}
              <div className="col-1-of-1 projects__project">
                <Link to="/gallery">
                  <Img className="projects__image" fixed={data.gallery12.childImageSharp.fixed} />
                </Link>
                <div className="projects__description">
                  <p>I first discovered coding in an art class in college. We used Processing (a Java based library) to make little art pieces. I didn't really know what I was doing, but I knew that I loved the way 10 lines of code could make something dance across the screen. I was hooked. I've included some of my digital artwork because the majority of the works were created with JavaScript. They showcase the creative reaches of code and my abilities.</p>
                  <p>Technologies used: <strong>JavaScript</strong> and <strong>p5.js</strong></p>
                  <Link to="/gallery" className="projects__link">Explore</Link> some of my digital artwork.
                </div>
              </div>
            </div>
          </section>
        )}
      />
    )
  }
}

export const fixedImageProjects = graphql`
  fragment fixedImageProjects on File {
    childImageSharp {
      fixed(width: 1000, height: 550) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`