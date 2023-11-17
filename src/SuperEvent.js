import { SuperAnimate } from './SuperAnimate'
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
/**
* @class creates an element
 */
export function SuperEvent () {
  this.element = document.createElement('span')
}

SuperEvent.prototype = Object.create(SuperAnimate.prototype)
/**
 * a function that handles click events
 * @param {listener} callback - listens for event activation
 * @param {Object} options -  if the event does not get explicitly handled, its default action should not be taken as it normally would be
 */

SuperEvent.prototype.click = function (callback, options) {
  addListener(this.element, 'click', callback, options)
}

/**
 * a function that handles submit events
 * @param {listener} callback - listens for event activation
 * @param {Object} options -  if the event does not get explicitly handled, its default action should not be taken as it normally would be
 */

SuperEvent.prototype.submit = function (callback, options) {
  addListener(this.element, 'submit', callback, options)
}

/**
 * a function that handles keyUp events
 * @param {listener} callback - listens for event activation
 * @param {Object} options -  if the event does not get explicitly handled, its default action should not be taken as it normally would be
 */

SuperEvent.prototype.keyUp = function (callback, options) {
  addListener(this.element, 'keyup', callback, options)
}
