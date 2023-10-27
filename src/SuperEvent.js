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

export function $ev () {
  this.element = document.createElement('span')
}

$ev.prototype.click = function (callback, options) {
  addListener(this.element, 'click', callback, options)
}

$ev.prototype.submit = function (callback, options) {
  addListener(this.element, 'submit', callback, options)
}

$ev.prototype.keyUp = function (callback, options) {
  addListener(this.element, 'keyup', callback, options)
}
