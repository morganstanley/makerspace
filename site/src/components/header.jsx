import React from 'react';
import { Link, navigate, useStaticQuery, graphql, withPrefix } from 'gatsby';

import { useLocale } from '../i18n/LocaleContext';
import {
  LOCALE_NAMES,
  SUPPORTED_LOCALES,
  getLocalePath,
  getLocaleSwitchPath,
  resolveExistingPath,
  stripPathPrefix,
} from '../i18n';

const Header = ({ location }) => {
  const { strings, locale } = useLocale();
  const { nav } = strings;
  const data = useStaticQuery(graphql`
    query HeaderPagePaths {
      allMdx {
        nodes {
          fields {
            slug
            language
          }
        }
      }
    }
  `);
  const pathname = stripPathPrefix(location?.pathname, withPrefix('/'));
  const existingPaths = new Set(
    data.allMdx.nodes.map(({ fields }) => {
      const slug = fields.slug;
      return slug.endsWith('/') ? slug : `${slug}/`;
    })
  );
  existingPaths.add('/');
  SUPPORTED_LOCALES.forEach((l) => existingPaths.add(getLocalePath('/', l)));

  const links = [
    { label: nav.learn, path: getLocalePath('/exercises', locale) },
    { label: nav.teach, path: getLocalePath('/teach', locale) },
    { label: nav.makerspace, path: getLocalePath('/makerspace', locale) },
    { label: nav.about, path: getLocalePath('/about', locale) },
  ];

  function menuLink({ label, path }) {
    const normalize = (p) => p.replace(/\/$/, '');
    const classname =
      normalize(path) === normalize(pathname) ? 'nav-link-current' : 'nav-link';

    return (
      <li key={label}>
        <Link className={classname} to={path}>
          {label}
        </Link>
      </li>
    );
  }

  function onLocaleChange(event) {
    const nextLocale = event.target.value;
    const switchPath = getLocaleSwitchPath(pathname, nextLocale);
    navigate(resolveExistingPath(switchPath, existingPaths, nextLocale));
  }

  return (
    <div className="content">
      <h1>
        <Link className="logo-link" to={getLocalePath('/', locale)}>
          Makerspace
        </Link>
      </h1>

      <div className="header-nav">
        <div className="header-nav-controls">
          <ul>{links.map(menuLink)}</ul>
          <label className="language-selector">
            <select value={locale} onChange={onLocaleChange} aria-label={nav.language}>
              {SUPPORTED_LOCALES.map((supportedLocale) => (
                <option key={supportedLocale} value={supportedLocale}>
                  {LOCALE_NAMES[supportedLocale]}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Header;
