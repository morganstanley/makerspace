import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

import {
  DEFAULT_LOCALE,
  LOCALE_STORAGE_KEY,
  getLocaleSegmentFromPath,
  getStoredLocale,
  getStrings,
} from './index';

const LocaleContext = createContext(null);

export function LocaleProvider({ location, children }) {
  const [preferredLocale, setPreferredLocale] = useState(getStoredLocale);
  const pathLocaleSegment = getLocaleSegmentFromPath(location?.pathname);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    window.localStorage.setItem(LOCALE_STORAGE_KEY, preferredLocale);
  }, [preferredLocale]);

  const value = useMemo(() => {
    const locale = pathLocaleSegment || preferredLocale || DEFAULT_LOCALE;
    return {
      locale,
      strings: getStrings(locale),
      setLocalePreference: setPreferredLocale,
    };
  }, [pathLocaleSegment, preferredLocale]);

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
