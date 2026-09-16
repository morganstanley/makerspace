import React, { createContext, useContext, useEffect, useMemo } from 'react';

import {
  LOCALE_STORAGE_KEY,
  getLocaleFromPath,
  getStrings,
} from './index';

const LocaleContext = createContext(null);

export function LocaleProvider({ location, children }) {
  // The locale must always reflect the page actually being viewed, which is
  // determined entirely by the URL. Falling back to a previously stored
  // preference here would let the selector (and its links) point to a
  // different language than the content on screen.
  const locale = getLocaleFromPath(location?.pathname);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  }, [locale]);

  const value = useMemo(
    () => ({
      locale,
      strings: getStrings(locale),
    }),
    [locale]
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return ctx;
}
