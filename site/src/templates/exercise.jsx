import React, { useMemo } from 'react';
import { Link, graphql } from 'gatsby';

import ExerciseNav from '../components/exercise-nav';
import Layout from '../components/layout';
import PageHead from '../components/head';
import { getLocaleFromPath, getStrings } from '../i18n';

import { getCurrentLanguage, getLanguage } from '../utils/language';

function nextPrev(nodes, location) {
  const len = nodes.length;
  const current = nodes.findIndex((node) =>
    location.pathname.includes(node.fields.slug)
  );
  const prevNode = current !== 0 ? nodes[current - 1] : false;
  const nextNode = current !== len - 1 ? nodes[current + 1] : false;
  return [nextNode, prevNode];
}

const ExerciseTemplate = ({ children, data, pageContext, location }) => {
  const pageTitle = pageContext.frontmatter.title;
  const toc = data.mdx.tableOfContents.items;
  const slug = data.mdx.fields.slug;
  const languages = useMemo(
    () => data.allDirectory.nodes.map((node) => node.base),
    [data.allDirectory.nodes]
  );
  const selectedLanguage = getCurrentLanguage(slug, languages);
  const nodes = getLanguage(data.allMdx.nodes, selectedLanguage);
  const [next, previous] = nextPrev(nodes, location);
  const strings = getStrings(getLocaleFromPath(location?.pathname));
  const { exercise: exerciseStrings } = strings;

  return (
    <Layout location={location}>
      <article className="exercise-main content">
        <ExerciseNav location={location} nodes={nodes} toc={toc} />
        <div className="exercise-content">
          <header>
            <h2>{pageTitle}</h2>
          </header>
          {children}
        </div>
      </article>

      <nav className="content">
        <ul className="exercise-nav">
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {exerciseStrings.exercise} {previous.frontmatter?.exercise} |{' '}
                {previous.frontmatter?.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {exerciseStrings.exercise} {next.frontmatter?.exercise} |{' '}
                {next.frontmatter?.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  );
};

export default ExerciseTemplate;

export const Head = ({ pageContext }) => {
  const title = `${pageContext.frontmatter.title} | Level ${pageContext.frontmatter.level} | Exercise ${pageContext.frontmatter.exercise}`;
  return (
    <PageHead title={title}>
      <meta name="description" content={pageContext.description} />
    </PageHead>
  );
};

export const exerciseQuery = graphql`
  query ($id: String!, $category: String!) {
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
        level
        exercise
      }
      internal {
        contentFilePath
      }
      tableOfContents
    }
    allMdx(
      filter: { frontmatter: { category: { eq: $category } } }
      sort: [
        { frontmatter: { level: ASC } }
        { frontmatter: { exercise: ASC } }
      ]
    ) {
      nodes {
        id
        excerpt
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
