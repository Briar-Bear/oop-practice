import { SuperElement } from './SuperElement'

/**
 * @class Used to align content
 * @extends SuperElement
 * @param {string} position - the direction the items can be aligned
 */
export function SuperDisplay ({ position, direction = '' }) {
  SuperElement.call(this, 'div')
  this.element.style.display = 'flex'
  this.element.style.flexDirection = direction
  this.alignment(position)

  this.element.hashTable = {

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
}

SuperDisplay.prototype = Object.create(SuperElement.prototype)
/**
 * aligns items within the SuperDisplay element
 * @param {string} position - the direction the items can be aligned
 */
SuperDisplay.prototype.alignment = function (position) {
  this.element.hashTable[position]()
}
