import { SuperElement } from './SuperElement.js'

/**
 * Used to create images
 * @class
 * @extends SuperElement
 * @param {Object} options
 * @param {string} options.src - assigns a src to the image
 * @param {string} options.width - assigns the width of the element
 * @param {string} options.height - assigns the height of the element
 */
export function SuperImage ({ src, width, height, options = [] } = {}) {
  SuperElement.call(this, 'img', options)
  /**
   * @type {HTMLImageElement}
   */
  this.element.src = src
  this.element.style.width = width + 'px'
  this.element.style.height = height + 'px'
}

SuperImage.prototype = Object.create(SuperElement.prototype)
SuperImage.prototype.constructor = SuperImage
