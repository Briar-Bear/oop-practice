import { $e } from './SuperElement'

/**
 * @class Used to align content
 * @extends $e
 * @param {string} alignment - the direction the items can be aligned
 */
export function $d ({ alignment, direction = '' }) {
  $e.call(this, 'div')
  this.element.style.display = 'flex'
  this.element.style.flexDirection = direction
  this.alignment(alignment)
}

$d.prototype = Object.create($e.prototype)
/**
 * aligns items within the $d element
 * @param {string} alignment - the direction the items can be aligned
 */
$d.prototype.alignment = function (alignment) {
  if (alignment === 'centerBoth') {
    this.element.style.alignItems = 'center'
    this.element.style.justifyContent = 'center'
  } else if (alignment === 'centerRight') {
    this.element.style.alignItems = 'center'
    this.element.style.justifyContent = 'flex-end'
  } else if (alignment === 'centerLeft') {
    this.element.style.alignItems = 'center'
    this.element.style.justifyContent = 'flex-start'
  } else if (alignment === 'top') {
    this.element.style.alignItems = 'flex-start'
  } else if (alignment === 'topCenter') {
    this.element.style.alignItems = 'flex-start'
    this.element.style.justifyContent = 'center'
  } else if (alignment === 'topRight') {
    this.element.style.alignItems = 'flex-start'
    this.element.style.justifyContent = 'flex-end'
  } else if (alignment === 'topLeft') {
    this.element.style.alignItems = 'start'
    this.element.style.justifyContent = 'flex-start'
  } else if (alignment === 'bottom') {
    this.element.style.alignItems = 'flex-end'
  } else if (alignment === 'bottomCenter') {
    this.element.style.alignItems = 'flex-end'
    this.element.style.justifyContent = 'center'
  } else if (alignment === 'bottomRight') {
    this.element.style.alignItems = 'flex-end'
    this.element.style.justifyContent = 'flex-end'
  } else if (alignment === 'bottomLeft') {
    this.element.style.alignItems = 'flex-end'
    this.element.style.justifyContent = 'flex-start'
  }
}
