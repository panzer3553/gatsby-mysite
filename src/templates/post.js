import React from 'react';
import { graphql } from 'gatsby';
import {
 Layout, SmallerContainer, SEO, Post,
} from '../components/common';
import { Highlight } from './highlight';

const Template = ({ data: { post } }) => (
  <Highlight>
    <Layout>
      <SmallerContainer>
        <SEO
          type="NewsArticle"
          title={post.frontmatter.title}
          articleBody={post.html}
          datePublished={post.frontmatter.date}
          dateModified={post.frontmatter.date}
          cover={post.frontmatter.thumbnail.childImageSharp.fluid.originalImg}
          location={post.frontmatter.path}
        />
        <Post post={data.markdownRemark} />
      </SmallerContainer>
    </Layout>
  </Highlight>
);

export const postQuery = graphql`
  query($slug: String!) {
    post: markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      timeToRead
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        next
        thumbnail
      }
    }
  }
`;

export default Template;
