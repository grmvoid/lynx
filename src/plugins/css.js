/**
 * Copyright (c) 2022-2025 Dominik Szamburski
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const { Lynx } = require('../lynx')

Lynx.prototype.addClass = function (className) {
  this.forEach((el) => {
    el.classList.add(className)
  })

  return this
}

Lynx.prototype.removeClass = function (className) {
  this.forEach((el) => {
    el.classList.remove(className)
  })

  return this
}

Lynx.prototype.css = function (property, value) {
  this.forEach((el) => {
    el.style[property] = value
  })

  return this
}
