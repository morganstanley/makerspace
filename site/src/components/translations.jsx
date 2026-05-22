import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import { LOCALE_NAMES } from '../i18n';

export default function Translations() {
  const data = useStaticQuery(graphql`
    query TranslationsQuery {
      allDirectory(filter: { relativeDirectory: { eq: "exercises" } }) {
        nodes {
          base
        }
      }
    }
  `);

  const translations = data.allDirectory.nodes.map((node) => node.base);

  return (
    <ul>
      {translations.map((translation) => {
        const url = `/exercises/${translation}/`;
        return (
          <li key={translation}>
            <Link to={url}>{LOCALE_NAMES[translation] || translation}</Link>
          </li>
        );
      })}
    </ul>
  );
}
