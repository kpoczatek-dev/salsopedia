module.exports = {
  title: 'Salsopedia',
  tagline: 'Społecznościowa wiki o salsie',
  url: 'https://wiki.katosalsahub.pl',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'tokpoczatek-dev',
  projectName: 'salsopedia',
  i18n: {
    defaultLocale: 'pl',
    locales: ['pl'],
  },
presets: [
  [
    'classic',
    {
      docs: {
        sidebarPath: require.resolve('./sidebars.js'),
        routeBasePath: '/', // ← to musisz dodać
      },
      theme: {
        customCss: require.resolve('./src/css/custom.css'),
      },
    },
  ],
],
};
