import { HashDOM } from './hashdom';

import './plugins/dom';
import './plugins/css';

window.hash = (selector) => {
  if (typeof selector === 'string' || selector instanceof String) {
    return new HashDOM(...document.querySelectorAll(selector));
  }

  return new HashDOM(selector);
};
