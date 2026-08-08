import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { useLocation } from '@reach/router';

import { getCurrentLanguage, getTranslationPath } from '../utils/language';

export default function Translations() {
  const location = useLocation();
  const data = useStaticQuery(graphql`
    query TranslationsQuery {
      allDirectory(filter: { sourceInstanceName: { eq: "content" }, relativeDirectory: { eq: "" } }) {
        nodes {
          base
        }
      }
    }
  `);

  const allDirs = data.allDirectory.nodes.map((node) => node.base);
  const languages = ['en-US', 'fr-CA', 'pt-BR'].filter(
    (lang) => allDirs.includes(lang) || lang === 'en-US'
  );

  let currentLanguage = getCurrentLanguage(location.pathname, languages);
  if (!currentLanguage) {
    currentLanguage = 'en-US';
  }

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
