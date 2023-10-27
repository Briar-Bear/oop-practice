import { $ev } from './SuperEvent'

/**
 * the name of the element
 * @typedef {string} elementTag
 */

/**
 * @class creates elements
 * @extends $ev
 * @param {elementTag} type - {@link elementTag}
 */
export function $e (type) {
  // extending the key values
  $ev.call(this)
  this.element = document.createElement(type)

  Object.defineProperty(this, 'color', {
    get: function () {
      return this.element.style.color
    },

    set: (value) => {
      this.element.style.color = value
    }
  })
}

/**
 * inheriting superEvent prototype
 */
$e.prototype = Object.create($ev.prototype)

/**
 * Used to append
 * @param {string} parent - appends to the parent object
 */
$e.prototype.appendTo = function (parent) {
  if (parent.element) {
    parent.element.append(this.element)
  } else {
    parent.append(this.element)
  }
}

/**
 * Used to remove element
 */
$e.prototype.remove = function () {
  this.element.remove()
}

// SuperElement.prototype.colour = function (colour) {
//   this.element.style.color = colour
// }

$e.prototype.disable = function () {
  this.element.disabled = true
}

$e.prototype.enable = function () {
  this.element.disabled = false
}
