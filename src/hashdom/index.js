export class HashDOM extends Array {
  ready (callback) {
    const isReadySelector = this.some((el) => {
      return el.readyState !== null && el.readyState !== 'loading'
    })

    if (isReadySelector) {
      return callback()
    }

    this.on('DOMContentLoaded', callback)
  }

  on (event, selector, callback) {
    if (typeof selector === 'function') {
      this.forEach((e) => {
        e.addEventListener(event, selector)
      })

      return this
    }

    this.forEach((el) => {
      el.addEventListener(event, (e) => {
        if (e.target.matches(selector)) {
          callback(e)
        }
      })
    })

    return this
  }
}
