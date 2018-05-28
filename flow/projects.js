//      

import { ProjectI } from '../types/interfaces/';

// TODO: change hardcoded source paths to dynamic paths based on dev or prod
// TODO: replace stock images with real ones

const projects             = [
  {
    id: 1,
    image: 'http://localhost:8080/assets/flash-shopper.png',
    name: 'Flash Shopper',
    description: 'A grocery shopping and recipes app build in Vue.js, Firebase, and Pug. Integrates grocery shopping with recipes and allows user to connect to external sites such as Instacart and sort by aisle in a brick-and-mortar store.',
    href: 'https://github.com/gness1804/flash-shopper-web-vue',
  },
  {
    id: 2,
    image: 'http://localhost:8080/assets/bash.png',
    name: 'Zsh Scripts',
    description: 'Bash scripts to automate various processes.',
    href: 'https://github.com/gness1804/zsh-scripts',
  },
  {
    id: 3,
    image: 'http://localhost:8080/assets/weathrly.png',
    name: 'Weathrly 3.0',
    description: 'A basic weather app using the Weather Underground API. The user can select any US city and state and display a forecast of several days; select from a convenient dropdown of states; and geolocate (if the user enables this option), which auto-populates the city and state fields based on the user\'s location.',
    href: 'https://github.com/gness1804/weather-app-redone',
  },
  {
    id: 4,
    image: 'http://localhost:8080/assets/we-the-people.png',
    name: 'MyGov (Formerly We The People) (with Ian Lancaster)',
    description: 'MyGov is an application created in React Native that allows a user to track current Congressional bills and new laws. Using the Sunlight Congress API, the application brings in data on bills and laws including title, date introduced, date of last action, sponsor, current progress (in House Committee, passed by Senate, enacted...), and other data. The application won first prize in a code competition at Turing School in March 2017.',
    href: 'https://github.com/gness1804/we-the-people-native',
  },
];

export default projects;

