import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useAlternatePageUtils} from '@docusaurus/theme-common/internal';

type Props = {
  mobile?: boolean;
  className?: string;
};

// Short, segmented labels shown in the control.
const SHORT_LABELS: Record<string, string> = {
  nb: 'NO',
  en: 'EN',
};

// A segmented NO | EN control. Both locales are always visible; the current
// one is highlighted, and the other links to the equivalent page in that
// locale (preserving the current path).
export default function LocaleToggle({mobile, className}: Props) {
  const {
    i18n: {currentLocale, locales, localeConfigs},
  } = useDocusaurusContext();
  const alternatePageUtils = useAlternatePageUtils();

  const segments = locales.map((locale) => {
    const localeConfig = localeConfigs[locale];
    const shortLabel = SHORT_LABELS[locale] ?? locale.toUpperCase();
    const isActive = locale === currentLocale;

    if (isActive) {
      return (
        <span
          key={locale}
          className="localeToggle__segment localeToggle__segment--active"
          aria-current="true"
          lang={localeConfig.htmlLang}>
          {shortLabel}
        </span>
      );
    }

    // Mirror the core LocaleDropdown: `pathname://` forces a hard cross-locale
    // navigation and is exempt from the broken-link checker. createUrl already
    // includes the target locale's baseUrl, so autoAddBaseUrl must be false.
    const to = `pathname://${alternatePageUtils.createUrl({
      locale,
      fullyQualified: false,
    })}`;

    return (
      <Link
        key={locale}
        to={to}
        target="_self"
        autoAddBaseUrl={false}
        className="localeToggle__segment"
        lang={localeConfig.htmlLang}
        aria-label={`Switch language to ${localeConfig.label}`}
        title={`Switch language to ${localeConfig.label}`}>
        {shortLabel}
      </Link>
    );
  });

  const control = (
    <div
      className={clsx('localeToggle', className)}
      role="group"
      aria-label="Language">
      {segments}
    </div>
  );

  if (mobile) {
    return <li className="menu__list-item">{control}</li>;
  }

  return control;
}
