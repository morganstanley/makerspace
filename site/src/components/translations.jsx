import React from 'react';
import { Link, graphql, useLocation, useStaticQuery } from 'gatsby';

import { getCurrentLanguage, getTranslationPath } from '../utils/language';

export default function Translations() {
  const location = useLocation();
  const data = useStaticQuery(graphql`
    query TranslationsQuery {
      allDirectory(filter: { relativeDirectory: { eq: "exercises" } }) {
        nodes {
          base
        }
      }
    }
  `);

  const languages = data.allDirectory.nodes.map((node) => node.base);
  const currentLanguage = getCurrentLanguage(location.pathname, languages);
  const translations = languages.filter(
    (translation) => translation !== currentLanguage
  );

  if (!translations.length) {
    return null;
  }

  return (
    <nav aria-label="Translations">
      <ul>
        {translations.map((translation) => {
          const url = getTranslationPath(location.pathname, translation);
          return (
            <li key={translation}>
              <Link to={url}>{translation}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
