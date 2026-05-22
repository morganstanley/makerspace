import React, { createContext, useContext, useMemo } from 'react';

import { getLocaleFromPath, getStrings } from './index';

const LocaleContext = createContext(null);

export function LocaleProvider({ location, children }) {
  const value = useMemo(() => {
    const locale = getLocaleFromPath(location?.pathname);
    return { locale, strings: getStrings(locale) };
  }, [location?.pathname]);

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
