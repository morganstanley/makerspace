import React, { useMemo } from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import Hero from '../components/hero';
import Layout from '../components/layout';
import PageHead from '../components/head';
import SiteMap from '../components/site-map';

import { getCurrentLanguage, getLanguage } from '../utils/language';

const ExerciseIndexTemplate = ({ children, data, pageContext, location }) => {
  const pageTitle = pageContext.frontmatter.title;
  const subTitle = pageContext.frontmatter.subtitle
    ? pageContext.frontmatter.subtitle
    : '';
  const heroImage = getImage(pageContext.frontmatter.heroImage);
  const heroId = pageContext.frontmatter.heroId;
  const category = pageContext.frontmatter.category;
  const level = pageContext.frontmatter.level;
  const slug = data.mdx.fields.slug;
  const languages = useMemo(
    () => data.allDirectory.nodes.map((node) => node.base),
    [data.allDirectory.nodes]
  );
  const selectedLanguage = getCurrentLanguage(slug, languages);
  const nodes = getLanguage(data.allMdx.nodes, selectedLanguage).filter(
    (node) =>
      node.frontmatter.category === category &&
      node.frontmatter.level === level &&
      !!node.frontmatter.exercise
  );

  return (
    <Layout location={location}>
      <GatsbyImage image={heroImage} alt="" />
      <Hero title={pageTitle} subtitle={subTitle} heroId={heroId} />
      <div className="content">{children}</div>
      <div className="content">
        <SiteMap location={location} nodes={nodes} />
      </div>
    </Layout>
  );
};

export default ExerciseIndexTemplate;

export const Head = ({ pageContext }) => (
  <PageHead title={pageContext.frontmatter.title}>
    <meta name="description" content={pageContext?.description} />
  </PageHead>
);

export const pageQuery = graphql`
  query ($id: String!) {
    allDirectory(filter: { relativeDirectory: { eq: "exercises" } }) {
      nodes {
        base
      }
    }
    mdx(id: { eq: $id }) {
      fields {
        slug
      }
      frontmatter {
        title
        subtitle
        description
        category
        level
      }
      tableOfContents
    }
    allMdx(
      sort: [
        { frontmatter: { level: ASC } }
        { frontmatter: { exercise: ASC } }
      ]
    ) {
      nodes {
        id
        tableOfContents
        frontmatter {
          title
          exercise
          level
          category
        }
        internal {
          contentFilePath
        }
        fields {
          slug
        }
      }
    }
  }
`;
