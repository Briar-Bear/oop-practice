/**
 * @class Used to create event listeners
 * @param {HTMLElement} target - the element
 * @param {string} listener - listens for event activation
 * @param {Object} options -  if the event does not get explicitly handled, its default action should not be taken as it normally would be
 */

function addListener (target, type, listener, options = {}) {
  target.addEventListener(type, (e) => {
    if (options.preventDefault) {
      e.preventDefault()
    }
    listener(e)
  })
}

export function SuperEvent () {
  this.element = document.createElement('span')
}

SuperEvent.prototype.click = function (callback, options) {
  addListener(this.element, 'click', callback, options)
}

SuperEvent.prototype.submit = function (callback, options) {
  addListener(this.element, 'submit', callback, options)
}

SuperEvent.prototype.keyup = function (callback, options) {
  addListener(this.element, 'keyup', callback, options)
}