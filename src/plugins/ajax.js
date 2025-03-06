/**
 * Copyright (c) 2022-2025 Dominik Szamburski
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Lynx } from '../lynx'

if (window.$ === undefined) {
  window.$ = {}
}

Lynx.prototype.ajax = function (url, options = {}) {
  return fetch(url, options)
}

Lynx.prototype.get = function (url, options = {}) {
  return this.ajax(url, {
    method: 'GET',
    ...options
  })
}

Lynx.prototype.post = function (url, options = {}) {
  return this.ajax(url, {
    method: 'POST',
    ...options
  })
}

window.$.ajax = Lynx.prototype.ajax
