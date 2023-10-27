import { $e } from './SuperElement'

/**
 * @class Used to create images
 * @extends $e
 * @param {string} color - assigns a colour to the element
 * @param {string} width - assigns the width of the element
 * @param {string} height - assigns the height of the element
 */

export function $bm (color, width, height) {
  $e.call(this, 'div')
  this.element.style.backgroundColor = color
  this.element.style.width = width + 'px'
  this.element.style.height = height + 'px'
}

$bm.prototype = Object.create($e.prototype)
