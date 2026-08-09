import React from 'react';
import { Link } from 'gatsby';

import { useLocale } from '../i18n/LocaleContext';
import { getLocalePath } from '../i18n';

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
    const normalize = (p) => p.replace(/\/$/, '');
    const classname =
      normalize(path) === normalize(location.pathname) ? 'nav-link-current' : 'nav-link';

    return (
      <li key={label}>
        <Link className={classname} to={path}>
          {label}
        </Link>
      </li>
    );
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
        </div>
      </div>
    </div>
  );
};

export default Header;
