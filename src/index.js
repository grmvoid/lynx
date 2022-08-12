import { HashDOM } from './hashdom';

if (window.$ === undefined) {
  window.$ = {};
}

import './plugins/dom';
import './plugins/css';
import './plugins/ajax';

window.hash = (selector) => {
  if (typeof selector === 'string' || selector instanceof String) {
    return new HashDOM(...document.querySelectorAll(selector));
  }

  return new HashDOM(selector);
};
