import { SuperEvent } from './SuperEvent'

/**
 * the name of the element
 * @typedef {string} elementTag
 */


/**
 * @class creates elements
 * @extends SuperEvent
 * @param {elementTag} type - {@link elementTag}
 */
export function SuperElement (type) {
  // extending the key values
  SuperEvent.call(this)
  this.element = document.createElement(type)
}

/**
 * inheriting superEvent prototype
 */
SuperElement.prototype = Object.create(SuperEvent.prototype)

/**
 * Used to append
 * @param {string} parent - appends to the parent object
 */
SuperElement.prototype.appendTo = function (parent) {
  parent.append(this.element)
}

/**
 * Used to remove element
 */
SuperElement.prototype.remove = function () {
  this.element.remove()
}

SuperElement.prototype.colour = function (colour) {
  this.element.style.color = colour
}

SuperElement.prototype.disable = function () {
  this.element.disabled = true
}

SuperElement.prototype.enable = function () {
  this.element.disabled = false
}