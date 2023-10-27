import { $e } from './SuperElement'

/**
 * @class Used to create images
 * @extends $e
 * @param {string} src - assigns a src to the image
 * @param {Object} options
 * @param {string} options.width - assigns the width of the element
 * @param {string} options.height - assigns the height of the element
 */

export function $img ({ src, width, height }) {
  $e.call(this, 'img')
  this.element.src = src
  this.element.style.width = width + 'px'
  this.element.style.height = height + 'px'
}

$img.prototype = Object.create($e.prototype)
