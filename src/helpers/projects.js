// @flow

import { ProjectI } from '../types/interfaces/';

const projects: ProjectI[] = [
  {
    id: 1,
    image: 'http://localhost:8080/flash-shopper.png',
    name: 'Flash Shopper',
    description: 'A grocery shopping and recipes app build in Vue.js, Firebase, and Pug. Integrates grocery shopping with recipes and allows user to connect to external sites such as Instacart and sort by aisle in a brick-and-mortar store.',
    href: 'https://github.com/gness1804/flash-shopper-web-vue',
  },
  {
    id: 2,
    name: 'Zsh Scripts',
    description: 'Bash scripts to automate various processes.',
    href: 'https://github.com/gness1804/zsh-scripts',
  },
  {
    id: 3,
    name: 'Foo Project 3',
    description: 'I am the Foo Project 3',
    href: 'https://www.google.com',
  },
  {
    id: 4,
    name: 'Foo Project 4',
    description: 'I am the Foo Project 4',
    href: 'https://www.google.com',
  },
];

export default projects;

