/**
 * Copyright (c) 2022-2025 Dominik Szamburski
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Lynx } from './lynx'

import './plugins/dom'
import './plugins/css'
import './plugins/ajax'

if (window.$ === undefined) {
  window.$ = {}
}

window.lynx = (selector) => {
  if (typeof selector === 'string' || selector instanceof String) {
    return new Lynx(...document.querySelectorAll(selector))
  }

  return new Lynx(selector)
}
