import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'هندبوک سرمایه‌انسانی ستاره',
  favicon: 'img/mohaymen-logo.png',
  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',
  organizationName: 'Life-at-STAR',
  projectName: 'HR-Handbook',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'fa',
    locales: ['fa'],
  },

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    [
        '@docusaurus/plugin-content-docs',
        {
            path: 'handbook',
            routeBasePath: 'handbook',
            sidebarPath: require.resolve('./sidebars.ts'),
            editUrl:
            'https://github.com/Life-at-STAR/HR-Handbook',
        },
    ],
  ],
  themeConfig: {
    image: 'img/mohaymen-logo.png',
    navbar: {
      title: 'هندبوک سرمایه‌انسانی ستاره',
      logo: {
        alt: 'My Site Logo',
        src: 'img/mohaymen-logo.png',
      },
      items: [
      ],
    },
    footer: {
      style: 'dark',
      links: [
      ],
      copyright: `کپی‌رایت © ${new Date().toLocaleString("fa-IR").split('/')[0]} شرکت فناوری اطلاعات و ارتباطات مهیمن - پلتفرم تحلیل داده ستاره. ساخته شده با Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
