import _ from 'lodash';

import { header } from './header'

header();
function component() {
    const element = document.createElement('div');
  
    // Lodash, Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
  }
  
  document.body.appendChild(component());