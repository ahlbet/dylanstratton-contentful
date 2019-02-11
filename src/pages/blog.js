import React from 'react';
import Link from 'gatsby-link';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

const Blog = ({ data }) => (
  <Layout>
    <div className="blog u-center-text">
      <div className="blog__heading">
        <h1 className="blog__heading--header">Blog</h1>
        <div className="blog__heading--links">
          <Link className="blog__heading--links-home" to="/">Home</Link>
          <Link className="blog__heading--links-gallery" to="/gallery">Gallery</Link>
        </div>
      </div>
      <ul className="blog__list">
        {data.allContentfulPost.edges.map(post => (
          <li className="blog__list--item" key={post.node.id}>
            {post.node.date}---
            <Link className="blog__list--item-link" to={`/blog/${post.node.title.replace(/\s+/g, '-')}/`}>
              {post.node.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </Layout>
);

export const pageQuery = graphql`
  query IndexQuery {
    allContentfulPost(sort: { order: DESC, fields: [date] }) {
      edges {
        node {
          id
          title
          date
          content {
            content
          }
        }
      }
    }
  }
`;

export default Blog;
