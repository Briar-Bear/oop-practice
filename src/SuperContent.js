import { SuperElement } from './SuperElement'

/**
 * @class Used to create elements and give them content
 * @extends SuperElement
 * @param {elementTag} type - {@link elementTag}
 * @param {string} content - adds text to inside elements
 */
export function SuperContent (type, content, font, fontSize) {
  // set an if condition so if value in the contructor isnt used, it wont accept it if it's empty.
  SuperElement.call(this, type)

  this.element.style.fontFamily = font
  this.element.style.fontSize = fontSize + 'px'
  this.element.innerText = content
}

SuperContent.prototype = Object.create(SuperElement.prototype)

SuperContent.prototype.strike = function () {
  this.element.style.textDecorationLine = 'line-through'
}

SuperContent.prototype.unStrike = function () {
  this.element.style.textDecorationLine = 'none'
}
