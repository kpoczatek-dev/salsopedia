import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'b7f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '010'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '3a1'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '609'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'e83'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '642'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '154'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', 'c16'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '98e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/historia/rozwój-w-usa',
        component: ComponentCreator('/historia/rozwój-w-usa', '3ae'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/historia/salsa-na-kubie',
        component: ComponentCreator('/historia/salsa-na-kubie', 'b62'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/muzyka/clave-i-rytmy',
        component: ComponentCreator('/muzyka/clave-i-rytmy', '56e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/muzyka/instrumenty',
        component: ComponentCreator('/muzyka/instrumenty', '583'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/scena-w-polsce/miasta-i-wydarzenia',
        component: ComponentCreator('/scena-w-polsce/miasta-i-wydarzenia', '8e3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/słowniczek/casino',
        component: ComponentCreator('/słowniczek/casino', '406'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/słowniczek/cuenta',
        component: ComponentCreator('/słowniczek/cuenta', '346'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/słowniczek/shines',
        component: ComponentCreator('/słowniczek/shines', 'bfa'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/style/kubańska',
        component: ComponentCreator('/style/kubańska', '976'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/style/la-style',
        component: ComponentCreator('/style/la-style', '746'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/style/ny-style',
        component: ComponentCreator('/style/ny-style', '78e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/style/rueda',
        component: ComponentCreator('/style/rueda', '866'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
