import { HashDOM } from './hashdom'

import './plugins/dom'
import './plugins/css'
import './plugins/ajax'

if (window.$ === undefined) {
  window.$ = {}
}

window.hash = (selector) => {
  if (typeof selector === 'string' || selector instanceof String) {
    return new HashDOM(...document.querySelectorAll(selector))
  }

  return new HashDOM(selector)
}
