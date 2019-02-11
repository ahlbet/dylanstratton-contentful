import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

import Footer from '../components/Footer'
import Layout from '../components/layout'

const SecondPage = ({ data }) => (
  <Layout>

    <div className="gallery__heading">
      <h1 className="u-center-text gallery__heading--header">Gallery</h1>

      <div className="u-center-text gallery__heading--links">
        <Link className="gallery__heading--links-home" to="/">Home</Link>
        <Link className="gallery__heading--links-blog" to="/blog">Blog</Link>
      </div>
    </div>

    <div className="row">
      <Img fixed={data.gallery14.childImageSharp.fixed} className="col-1-of-2" />
      <Img fixed={data.gallery13.childImageSharp.fixed} className="col-1-of-2" />
    </div>

    <div className="row">
      <Img fixed={data.gallery1.childImageSharp.fixed} className="col-1-of-2" />
      <Img fixed={data.gallery12.childImageSharp.fixed} className="col-1-of-2" />
    </div>

    <div className="row">
      <Img fixed={data.gallery3.childImageSharp.fixed} className="col-1-of-2" />
      <Img fixed={data.gallery4.childImageSharp.fixed} className="col-1-of-2" />
    </div>

    <div className="row">
      <Img fixed={data.gallery5.childImageSharp.fixed} className="col-1-of-2" />
      <Img fixed={data.gallery6.childImageSharp.fixed} className="col-1-of-2" />
    </div>

    <div className="row">
      <Img fixed={data.gallery7.childImageSharp.fixed} className="col-1-of-2" />
      <Img fixed={data.gallery11.childImageSharp.fixed} className="col-1-of-2" />
    </div>

    <div className="row">
      <Img fixed={data.gallery9.childImageSharp.fixed} className="col-1-of-2" />
      <Img fixed={data.gallery10.childImageSharp.fixed} className="col-1-of-2" />
    </div>


    <Footer />
  </Layout>
)

export const fixedImage = graphql`
  fragment fixedImage on File {
    childImageSharp {
      fixed(width: 550, height: 550) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`

export const query = graphql`
  query {
    gallery14: file(relativePath: { eq: "gallery14.jpg" }) {
      ...fixedImage
    },
    gallery13: file(relativePath: { eq: "gallery13.png" }) {
      ...fixedImage
    },
    gallery1: file(relativePath: { eq: "gallery1.png" }) {
      ...fixedImage
    },
    gallery12: file(relativePath: { eq: "gallery12.png" }) {
      ...fixedImage
    },
    gallery3: file(relativePath: { eq: "gallery3.png" }) {
      ...fixedImage
    },
    gallery4: file(relativePath: { eq: "gallery4.png" }) {
      ...fixedImage
    },
    gallery5: file(relativePath: { eq: "gallery5.png" }) {
      ...fixedImage
    },
    gallery6: file(relativePath: { eq: "gallery6.png" }) {
      ...fixedImage
    },
    gallery7: file(relativePath: { eq: "gallery7.png" }) {
      ...fixedImage
    },
    gallery11: file(relativePath: { eq: "gallery11.jpg" }) {
      ...fixedImage
    },
    gallery9: file(relativePath: { eq: "gallery9.png" }) {
      ...fixedImage
    },
    gallery10: file(relativePath: { eq: "gallery10.png" }) {
      ...fixedImage
    },
  }
  `

export default SecondPage
