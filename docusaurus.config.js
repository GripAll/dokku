// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Gripbox',
 // tagline: 'Examine my previous journey',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://gripall.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/dokku/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'GripAll', // Usually your GitHub org/user name.
  projectName: 'dokku', // Usually your repo name.
  deploymentBranch: "deployment",

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Grip',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Info',
          },
         // {
        //    to: '/blog',
         //   label: 'Blog',
         //   position: 'left',
         // },
      ],
    },


   /* footer: {
      /* style:'', */
    /*  links: [
        {
          //title: 'Roblox',
          items: [
            {
              label: 'Roblox',
              href: 'https://create.roblox.com/talent/creators/3195667595',
            },
          ],
        },
        {
         // title: 'Discord',
          items: [
            {
              label: 'Discord',
              href: 'https://discordapp.com/users/666230610507071490',
            },
          ],
        },
        {
         // title: 'More',
         
          items: [
            {
              label: 'Paypal',
              href: 'https://paypal.me/brinyiczki',
            },
          ],
        },
      ],
      //copyright: `Copyright © ${new Date().getFullYear()} GripAll, Built with Docusaurus.`,
     
    },

    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,

    },
         
  },
      */

   },
};

module.exports = config;
