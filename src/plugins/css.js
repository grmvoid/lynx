/**
 * Copyright (c) 2022-2025 Dominik Szamburski
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const { HashDOM } = require('../hashdom')

HashDOM.prototype.addClass = function (className) {
  this.forEach((el) => {
    el.classList.add(className)
  })

  return this
}

HashDOM.prototype.removeClass = function (className) {
  this.forEach((el) => {
    el.classList.remove(className)
  })

  return this
}

HashDOM.prototype.css = function (property, value) {
  this.forEach((el) => {
    el.style[property] = value
  })

  return this
}
