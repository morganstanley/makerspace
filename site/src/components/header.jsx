import React from 'react';
import { Link, navigate } from 'gatsby';

import { useLocale } from '../i18n/LocaleContext';
import {
  LOCALE_NAMES,
  SUPPORTED_LOCALES,
  getLocalePath,
  getLocaleSwitchPath,
} from '../i18n';

const Header = ({ location }) => {
  const { strings, locale } = useLocale();
  const { nav } = strings;

  const links = [
    { label: nav.learn, path: getLocalePath('/exercises', locale) },
    { label: nav.teach, path: getLocalePath('/teach', locale) },
    { label: nav.makerspace, path: getLocalePath('/makerspace', locale) },
    { label: nav.about, path: getLocalePath('/about', locale) },
  ];

  function menuLink({ label, path }) {
    const classname =
      path === location.pathname ? 'nav-link-current' : 'nav-link';

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
    const nextPath = getLocaleSwitchPath(location?.pathname, nextLocale);
    navigate(nextPath);
  }

  return (
    <div className="content">
      <h1>
        <Link className="logo-link" to={`/`}>
          Makerspace
        </Link>
      </h1>

      <div className="header-nav">
        <div className="header-nav-controls">
          <ul>{links.map(menuLink)}</ul>
          <label className="language-selector">
            {nav.language}
            <select value={locale} onChange={onLocaleChange}>
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
