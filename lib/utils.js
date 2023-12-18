/**
 * @callback listener
 * @param {Event} event
 */

/**
 * @typedef {Object} listenerOptions -  if the event does not get explicitly handled, its default action should not be taken as it normally would be
 * @property {boolean} [preventDefault] - Runs the PreventDefault method {@link https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault}
 */

/**
 * @param {HTMLElement} target - the element
 * @param {listener} listener - listens for event activation
 * @param {listenerOptions} options -  if the event does not get explicitly handled, its default action should not be taken as it normally would be
 * @param {string} type
 */
function addListener (target, type, listener, options = {}) {
  target.addEventListener(type, (e) => {
    if (options.preventDefault) {
      e.preventDefault()
    }
    listener(e)
  })
}
export { addListener }
