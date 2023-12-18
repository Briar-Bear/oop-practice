// import { SuperAnimate } from './SuperAnimate.js'
import { addListener } from './utils.js'
/**
 * Used to create event listeners
 * @class
 * creates an element
 * @constructor
 */
export function SuperEvent () {
  this.element = document.createElement('span')
}

// SuperEvent.prototype = Object.create(SuperAnimate.prototype)
/**
 * a function that handles click events
 * @param {listener} callback - listens for event activation
 * @param {listenerOptions} options -  if the event does not get explicitly handled, its default action should not be taken as it normally would be
 */

SuperEvent.prototype.click = function (callback, options) {
  addListener(this.element, 'click', callback, options)
}

/**
 * a function that handles keyUp events
 * @param {listener} callback - listens for event activation
 * @param {listenerOptions} options -  if the event does not get explicitly handled, its default action should not be taken as it normally would be
 */

SuperEvent.prototype.keyUp = function (callback, options) {
  addListener(this.element, 'keyup', callback, options)
}
