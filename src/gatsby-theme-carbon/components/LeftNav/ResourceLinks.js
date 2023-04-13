import React from 'react';
import ResourceLinks from 'gatsby-theme-carbon/src/components/LeftNav/ResourceLinks';

const links = [
  {
    title: 'Slide di presentazione',
    href: 'https://ibm.box.com/shared/static/la98h4si8jazadc7a6lolkjb8damaw4p.pdf',
  },
  {
    title: 'IBM Ace toolkit',
    href: 'https://www.ibm.com/docs/en/app-connect/12.0?topic=enterprise-download-ace-developer-edition-get-started',
  },
  {
    title: 'Connettersi agli ambienti',
    href: '/guides/configuration',
  },
  {
    title: 'Project Interchange per ACE Toolkit',
    href: 'https://ibm.box.com/s/y1chrhe77toyy3c4jdhi1svsan48qqr8',
  },
];

// shouldOpenNewTabs: true if outbound links should open in a new tab
const CustomResources = () => <ResourceLinks shouldOpenNewTabs links={links} />;

export default CustomResources;
