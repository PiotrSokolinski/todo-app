import React, { useMemo } from 'react';
import flatten from 'flat';
import { IntlProvider } from 'react-intl';

import en from '../../translations/en.json';
import { JSONType } from '../../types';

export const appLocales = {
  en: 'en',
} as const;

type AppLocalesKeys = keyof typeof appLocales;
type AppLocales = typeof appLocales[AppLocalesKeys];

export const DEFAULT_LOCALE: AppLocales = appLocales.en;

type LanguageProviderProps = {
  children: React.ReactNode;
  locale?: AppLocalesKeys;
};

const messages: Record<AppLocalesKeys, JSONType> = {
  en,
};

const LanguageProvider = ({ children, locale = DEFAULT_LOCALE }: LanguageProviderProps) => {
  const flattenedMessages: Record<string, string> = useMemo(
    () => flatten(messages[locale]),
    [locale],
  );

  return (
    <IntlProvider
      locale={String(locale)}
      key={DEFAULT_LOCALE}
      defaultLocale={DEFAULT_LOCALE}
      messages={flattenedMessages}
    >
      {React.Children.only(children)}
    </IntlProvider>
  );
};

export default LanguageProvider;
