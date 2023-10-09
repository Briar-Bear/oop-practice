import { SuperElement } from './SuperElement'

/**
 * @class creates input for the form
 * @extends SuperElement
 * @param {elementTag} type - {@link elementTag}
 * @param {string} name - assigns the attribute
 * @param {Array.<Array.string>} options - a list that contains names and values to set attributes.
 */

export function SuperInput (type, name, options = []) {
  SuperElement.call(this, 'input')

  this.element.type = type
  this.element.name = name

  for (let i = 0; i < options.length; i++) {
    const [name, value] = options[i]
    this.element.setAttribute(name, value)
  }
}

SuperInput.prototype = Object.create(SuperElement.prototype)
