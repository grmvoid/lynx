const { HashDOM } = require('../hashdom');

HashDOM.prototype.addClass = function (className) {
  this.forEach((el) => {
    el.classList.add(className);
  });

  return this;
};

HashDOM.prototype.removeClass = function (className) {
  this.forEach((el) => {
    el.classList.remove(className);
  });

  return this;
};

HashDOM.prototype.css = function (property, value) {
  this.forEach((el) => {
    el.style[property] = value;
  });

  return this;
};
