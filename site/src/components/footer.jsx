import React from 'react';

import { useLocale } from '../i18n/LocaleContext';

const Footer = () => {
  const { strings } = useLocale();
  const { footer } = strings;

  return (
    <div className="content">
      {footer.message}{' '}
      <a
        href="https://github.com/MorganStanley/cpx-training"
        target="_blank"
        rel="noreferrer"
      >
        {footer.github}
      </a>
      .
    </div>
  );
};

export default Footer;
