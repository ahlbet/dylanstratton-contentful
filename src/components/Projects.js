import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import { graphql, StaticQuery } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const fixedImageProjects = graphql`
  fragment fixedImageProjects on File {
    childImageSharp {
      fixed(width: 1000, height: 550) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`

const Projects = () => (
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

          <div className="col-1-of-1 projects__project">
            <a href="https://tripwe.herokuapp.com/">
              <Img className="projects__image" fixed={data.tripWe.childImageSharp.fixed} />
            </a>
            <div className="projects__description">
              <p>tripWe is my capstone project for the Thinkful program. It is a complex web application that simplifies the group travel planning process. At its core, tripWe attempts to solve the problem of how messy planning a group trip can get. tripWe utilizes a React/Redux front end and a Node back end to build a multifaceted dashboard where users can add friends to trips, compare flight and hotel information, and plan activities. tripWe is my biggest project thus far: I worked with three teammates to create dozens of components that handle an immense amount of data. I was the lead designer on this project as well as handling front end components, like the map and group list.</p>
              <p>
                Technologies used: <strong>React / Redux</strong>, <strong>Postgres</strong>, <strong>Node</strong>, <strong>Sass</strong> and <strong>Heroku</strong> for hosting.
              </p>
              <div className="projects__links">
                <a href="https://tripwe.herokuapp.com/" className="projects__link">Demo</a>
                <a href="https://github.com/thinkful-ei19/tripwe-client" className="projects__link">
                  <FontAwesomeIcon icon={["fab", "github"]} size='lg' />
                </a>
              </div>
            </div>
          </div>

          <div className="col-1-of-1 projects__project">
            <a href="https://compassionate-edison-98c1f8.netlify.com/">
              <Img className="projects__image" fixed={data.repeat.childImageSharp.fixed} />
            </a>
            <div className="projects__description">
              <p>RepeatRepeat was an extremely exciting project to work on. After learning about data structures and algorithms, we were challenged to code a web application that implemented a spaced repetition algorithm using React on the front end and MongoDB on the back end. RepeatRepeat was built in a week: first we constructed the learning algorithm on the server side and then moved onto the client side. We then took the project a step further to add more user customization to the app. Users can build their own decks and share them in a public library of decks.</p>
              <p>Technologies used: <strong>React</strong>, <strong>MongoDB</strong>, <strong>Node</strong>, <strong>Sass</strong> and <strong>Netlify</strong> and <strong>Heroku</strong> for hosting.</p>
              <div className="projects__links">
                <a href="https://compassionate-edison-98c1f8.netlify.com/" className="projects__link">Demo</a>
                <a href="https://github.com/thinkful-ei19/Chris-Dylan-SRP-client" className="projects__link">
                  <FontAwesomeIcon icon={["fab", "github"]} size='lg' />
                </a>
              </div>
            </div>
          </div>

          <div className="col-1-of-1 projects__project">
            <a href="http://theatre-code.netlify.com/">
              <Img className="projects__image" fixed={data.theatreCode.childImageSharp.fixed} />
            </a>
            <div className="projects__description">
              <p>The Theatre and Code project grew out of an interest in two vastly different fields. But where do these fields intersect? How can theater use code to create its universes? What can programmers learn from the world of theater? I wanted a home base for my ramblings about these topics but also a place for others to contribute and collaborate. Theatre and Code is still in its early stages as far its musings are concerned, but the skeleton is there. The Gatsby, Contentful and Netlify development experience is excellent. Once I connected all three, I simply write a post in Contentful and a new build is triggered through Netlify. Boom. New post. This project also brought me into the world of Graphql - I'm definitely excited to dig deeper there.</p>
              <p>Technologies used: <strong>React</strong> (Gatsby), <strong>Contentful</strong> for content management, <strong>Sass</strong> and <strong>Netlify</strong> for hosting.</p>
              <div className="projects__links">
                <a href="http://theatre-code.netlify.com/" className="projects__link">Demo</a>
                <a href="https://github.com/ahlbet/theatre-code" className="projects__link">
                  <FontAwesomeIcon icon={["fab", "github"]} size='lg' />
                </a>
              </div>
            </div>
          </div>

          <div className="col-1-of-1 projects__project">
            <a href="http://www.patrickskrine.com/">
              <Img className="projects__image" fixed={data.skrine.childImageSharp.fixed} />
            </a>
            <div className="projects__description">
              <p>Patrick Skrine's sports blog is one of the first websites I ever created. Patrick is a wonderful sports journalist and was in need of a personal site to host some of his extra writing. I worked closely with him to discuss design needs, authentication and ease of use. I discovered the Netlify CMS and knew it would be a perfect platform for him to use. Similar to Contentful, Patrick writes a post in the Netlify CMS, clicks publish and it's automatically added to the site. Best of all, I don't need to touch a thing. </p>
              <p>Technologies used: <strong>HTML5</strong>, <strong>Sass</strong>, <strong>Jekyll</strong> and <strong>Netlify CMS</strong></p>
              <div className="projects__links">
                <a href="http://www.patrickskrine.com/" className="projects__link">Demo</a>
                <a href="https://github.com/ahlbet/patrickskrine-2" className="projects__link">
                  <FontAwesomeIcon icon={["fab", "github"]} size='lg' />
                </a>
              </div>
            </div>
          </div>

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

);

// export const query = graphql`
//   query {
//     tripWe: file(relativePath: { eq: "tripWe.png" }) {
//       ...fixedImageProjects
//     },
//   }
//   `

export default Projects;