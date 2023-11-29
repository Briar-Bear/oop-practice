import { SuperElement } from './SuperElement.js'

/**
 * @class Used to create images
 * @extends SuperElement
 * @param {string} color - assigns a colour to the element
 * @param {string} width - assigns the width of the element
 * @param {string} height - assigns the height of the element
 */

export function SuperBoxMaker (color, width, height) {
  SuperElement.call(this, 'div')
  this.element.style.backgroundColor = color
  this.element.style.width = width + 'px'
  this.element.style.height = height + 'px'
}

SuperBoxMaker.prototype = Object.create(SuperElement.prototype)
