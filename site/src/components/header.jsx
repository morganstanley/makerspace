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

  return (
    <div className="content">
      <h1>
        <Link className="logo-link" to={`/`}>
          Makerspace
        </Link>
      </h1>

      <div className="header-nav">
        <ul>{links.map(menuLink)}</ul>
      </div>
    </div>
  );
};

export default Header;
