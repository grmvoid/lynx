/**
 * Copyright (c) 2022-2025 Dominik Szamburski
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const { Lynx } = require('../lynx')

Lynx.prototype.html = function (html) {
  this.forEach((el) => {
    el.innerHTML = html
  })

  return this
}

Lynx.prototype.append = function (html) {
  this.forEach((el) => {
    el.innerHTML = el.innerHTML + html
  })

  return this
}

Lynx.prototype.prepend = function (html) {
  this.forEach((el) => {
    el.innerHTML = html + el.innerHTML
  })

  return this
}
