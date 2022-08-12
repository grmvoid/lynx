const { HashDOM } = require('../hashdom')

HashDOM.prototype.html = function (html) {
  this.forEach((el) => {
    el.innerHTML = html
  })

  return this
}

HashDOM.prototype.append = function (html) {
  this.forEach((el) => {
    el.innerHTML = el.innerHTML + html
  })

  return this
}

HashDOM.prototype.prepend = function (html) {
  this.forEach((el) => {
    el.innerHTML = html + el.innerHTML
  })

  return this
}
