import { HashDOM } from '../hashdom';

if (window.$ === undefined) {
  window.$ = {};
}

HashDOM.prototype.ajax = function (url, options = {}) {
  return fetch(url, options);
};

HashDOM.prototype.get = function (url, options = {}) {
  return this.ajax(url, {
    method: 'GET',
    ...options,
  });
};

HashDOM.prototype.post = function (url, options = {}) {
  return this.ajax(url, {
    method: 'POST',
    ...options,
  });
};

window.$.ajax = HashDOM.prototype.ajax;
