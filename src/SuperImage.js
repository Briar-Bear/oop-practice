import { SuperElement } from './SuperElement'

/**
 * @class Used to create images
 * @extends SuperElement
 * @param {string} src - assigns a src to the image
 * @param {Object} options
 * @param {string} options.width - assigns the width of the element
 * @param {string} options.height - assigns the height of the element
 */

export function SuperImage ({ src, width, height }) {
  SuperElement.call(this, 'img')
  this.element.src = src
  this.element.style.width = width + 'px'
  this.element.style.height = height + 'px'
}

SuperImage.prototype = Object.create(SuperElement.prototype)
