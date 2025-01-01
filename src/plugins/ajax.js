/**
 * Copyright (c) 2022-2025 Dominik Szamburski
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { HashDOM } from '../hashdom'

if (window.$ === undefined) {
  window.$ = {}
}

HashDOM.prototype.ajax = function (url, options = {}) {
  return fetch(url, options)
}

HashDOM.prototype.get = function (url, options = {}) {
  return this.ajax(url, {
    method: 'GET',
    ...options
  })
}

HashDOM.prototype.post = function (url, options = {}) {
  return this.ajax(url, {
    method: 'POST',
    ...options
  })
}

window.$.ajax = HashDOM.prototype.ajax
