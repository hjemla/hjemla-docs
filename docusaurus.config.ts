import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Hjemla brukerdokumentasjon',
  tagline: 'Der alle boliger bor',
  favicon: 'img/favicon.ico',

  url: 'https://hjemla-docs.vercel.app',  // Vercel default; update if the project gets a different subdomain/custom domain
  baseUrl: '/',

  organizationName: 'hjemla',
  projectName: 'hjemla-docs',

  onBrokenLinks: 'warn',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'nb',
    locales: ['nb', 'en'],
    localeConfigs: {
      nb: {label: 'Norsk', htmlLang: 'nb-NO'},
      en: {label: 'English', htmlLang: 'en'},
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',            // docs at site root
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {customCss: './src/css/custom.css'},
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {hashed: true, language: ['en', 'no'], docsRouteBasePath: '/'},
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Hjemla',
      logo: {alt: 'Hjemla', src: 'img/logo.svg'},
      items: [
        {type: 'custom-localeToggle', position: 'right'},
        {href: 'https://www.hjemla.no', label: 'hjemla.no', position: 'right'},
      ],
    },
    footer: {
      style: 'light',
      copyright: `© ${new Date().getFullYear()} Hjemla v/ Placepoint AS · Tordenskiolds gate 2, 0160 Oslo`,
    },
    colorMode: {defaultMode: 'light', respectPrefersColorScheme: true},
  } satisfies Preset.ThemeConfig,
};

export default config;
