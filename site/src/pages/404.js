import React, { useEffect } from 'react';
import { graphql, navigate, withPrefix } from 'gatsby';

import Layout from '../components/layout';
import PageHead from '../components/head';
import {
  repairMalformedPath,
  resolveExistingPath,
  stripPathPrefix,
  DEFAULT_LOCALE,
  getLocaleFromPath,
} from '../i18n';
import SiteMap from '../components/site-map';

const NotFoundPage = ({ data, location }) => {
  const nodes = data.allMdx.nodes;

  useEffect(() => {
    const prefix = withPrefix('/');
    const pathname = location?.pathname || '';
    const stripped = stripPathPrefix(pathname, prefix);
    const repaired = repairMalformedPath(stripped, prefix);
    if (!repaired) return;
    const existing = new Set(
      nodes.map(({ fields }) =>
        fields.slug.endsWith('/') ? fields.slug : `${fields.slug}/`
      )
    );
    existing.add('/');
    const locale = getLocaleFromPath(stripped) || DEFAULT_LOCALE;
    const target = resolveExistingPath(repaired, existing, locale);
    if (existing.has(repaired) && repaired !== stripped) {
      navigate(target, { replace: true });
    }
  }, [location, nodes]);

  return (
    <Layout location={location}>
      <div className="content">
        <h2>404 Not Found</h2>
        <p>
          Sorry, the url you're looking for appears to be missing. Check out the
          sitemap below to find your expected page.
        </p>
        <SiteMap location={location} nodes={nodes} />
      </div>
    </Layout>
  );
};

export default NotFoundPage;

export const Head = () => <PageHead title="404 Not Found"></PageHead>;

export const pageQuery = graphql`
  query {
    allMdx {
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
