import { SuperAnimate } from './SuperAnimate.js'

/**
 * @callback listener
 * @param {Event} event
 */

/**
 * @typedef {Object} listenerOptions -  if the event does not get explicitly handled, its default action should not be taken as it normally would be
 * @property {boolean} [preventDefault] - Runs the PreventDefault method {@link https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault}
 */

/**
 * @param {HTMLElement} target - the element
 * @param {listener} listener - listens for event activation
 * @param {listenerOptions} options -  if the event does not get explicitly handled, its default action should not be taken as it normally would be
 * @param {string} type
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
 * Used to create event listeners
 * @class
 * creates an element
 * @constructor
 */
export function SuperEvent () {
  this.element = document.createElement('span')
}

SuperEvent.prototype = Object.create(SuperAnimate.prototype)
/**
 * a function that handles click events
 * @param {listener} callback - listens for event activation
 * @param {listenerOptions} options -  if the event does not get explicitly handled, its default action should not be taken as it normally would be
 */

SuperEvent.prototype.click = function (callback, options) {
  addListener(this.element, 'click', callback, options)
}

/**
 * a function that handles submit events
 * @param {listener} callback - listens for event activation
 * @param {listenerOptions} options -  if the event does not get explicitly handled, its default action should not be taken as it normally would be
 */

SuperEvent.prototype.submit = function (callback, options) {
  addListener(this.element, 'submit', callback, options)
}

/**
 * a function that handles keyUp events
 * @param {listener} callback - listens for event activation
 * @param {listenerOptions} options -  if the event does not get explicitly handled, its default action should not be taken as it normally would be
 */

SuperEvent.prototype.keyUp = function (callback, options) {
  addListener(this.element, 'keyup', callback, options)
}
