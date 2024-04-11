import { SuperElement } from './SuperElement.js'

/**
 * Used to align content
 * @class
 * @extends SuperElement
 * @param {Object} options
 * @param {string} [options.position] - the position the items can be aligned
 * @param {string} [options.direction=''] -the direction the items can be aligned
 * @param {Array.<Array.string>} options.options - a list that contains names and values to set attributes.
 */
export function SuperDisplay ({ position, direction = '', options = [] } = {}) {
  SuperElement.call(this, 'div', options)
  this.element.style.display = 'flex'
  this.element.style.flexDirection = direction

  if (position) {
    this.alignment(position)
  }
}

SuperDisplay.prototype = Object.create(SuperElement.prototype)
SuperDisplay.prototype.constructor = SuperDisplay
/**
 * aligns items within the SuperDisplay element
 * @param {string} position - the direction the items can be aligned
 */
SuperDisplay.prototype.alignment = function (position) {
  const hashTable = {

    centerBoth: () => {
      this.element.style.display = 'flex'
      this.element.style.alignItems = 'center'
      this.element.style.justifyContent = 'center'
    },
    centerRight: () => {
      this.element.style.display = 'flex'
      this.element.style.alignItems = 'center'
      this.element.style.justifyContent = 'flex-end'
    },
    centerLeft: () => {
      this.element.style.display = 'flex'
      this.element.style.alignItems = 'center'
      this.element.style.justifyContent = 'flex-start'
    },
    top: () => {
      this.element.style.display = 'flex'
      this.element.style.alignItems = 'flex-start'
    },
    topCenter: () => {
      this.element.style.display = 'flex'
      this.element.style.alignItems = 'flex-start'
      this.element.style.justifyContent = 'center'
    },
    topRight: () => {
      this.element.style.display = 'flex'
      this.element.style.alignItems = 'flex-start'
      this.element.style.justifyContent = 'flex-end'
    },

    topLeft: () => {
      this.element.style.display = 'flex'
      this.element.style.alignItems = 'flex-start'
      this.element.style.justifyContent = 'flex-start'
    },
    bottom: () => {
      this.element.style.display = 'flex'
      this.element.style.alignItems = 'flex-end'
    },
    bottomCenter: () => {
      this.element.style.display = 'flex'
      this.element.style.alignItems = 'flex-end'
      this.element.style.justifyContent = 'center'
    },
    bottomRight: () => {
      this.element.style.display = 'flex'
      this.element.style.alignItems = 'flex-end'
      this.element.style.justifyContent = 'flex-end'
    },
    bottomLeft: () => {
      this.element.style.display = 'flex'
      this.element.style.alignItems = 'flex-end'
      this.element.style.justifyContent = 'flex-start'
    }

  }

  hashTable[position]()
}
