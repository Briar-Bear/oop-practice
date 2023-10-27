import { $e } from './SuperElement'

/**
 * @class creates input for the form
 * @extends $e
 * @param {elementTag} type - {@link elementTag}
 * @param {string} name - assigns the attribute
 * @param {Array.<Array.string>} options - a list that contains names and values to set attributes.
 */

export function $i ({ type, name, options = [] }) {
  $e.call(this, 'input')

  this.element.type = type
  this.element.name = name

  for (let i = 0; i < options.length; i++) {
    const [name, value] = options[i]
    this.element.setAttribute(name, value)
  }
}

$i.prototype = Object.create($e.prototype)
