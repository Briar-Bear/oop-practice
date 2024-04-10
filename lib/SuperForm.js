import { SuperElement } from './SuperElement.js'
import { addListener } from './utils.js'

/**
 * Used to create form components
 * @class
 * @extends SuperElement
 */
export function SuperForm ({ options = [] } = {}) {
  SuperElement.call(this, 'form', options)
}

SuperForm.prototype = Object.create(SuperElement.prototype)
/**
 *gets data from the form
 * @param {string} name - gets the name filled in on the form
 */
SuperForm.prototype.getValue = function (name) {
  const formData = new FormData(this.element)

  return formData.get(name)
}

/**
 * a function that handles submit events
 * @param {listener} callback - listens for event activation
 * @param {listenerOptions} options -  if the event does not get explicitly handled, its default action should not be taken as it normally would be
 */

SuperForm.prototype.submit = function (callback, options) {
  addListener(this.element, 'submit', callback, options)
}

SuperForm.prototype.constructor = SuperForm
