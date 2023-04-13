module.exports = {
  siteMetadata: {
    title: 'Integration workshop',
    description: 'Workshop di esempio per l uso di strumenti ',
    keywords: 'IBM,APIC,ACE,workshop',
  },
  pathPrefix: `/workshop`,
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Carbon Design Gatsby Theme',
        icon: 'src/images/favicon.svg',
        short_name: 'IBM Integration workshop',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#161616',
        display: 'browser',
      },
    },
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        isSwitcherEnabled: false,
        isSearchEnabled: false,
        theme:
        {
          homepage: 'g10',
          interior: 'g10',
        },
      },
    },
  ],
};
