import { expect, test } from '@jest/globals'
import $e from '../lib/main.js'
import { SuperImage } from '../lib/SuperImage.js'

test('creating an instance of SuperImage', () => {
  const image = $e('image', { src: 'imagePlaceHolder', height: 10, width: 10 })
  expect(image.constructor).toBe(SuperImage)
})

// test to check if adding an image works - DOESN'T WORK

test('should add an image and dimensions ', () => {
  const image = $e('image', { src: 'imagePlaceHolder', height: 10, width: 10 })

  expect(image.element.src).toBe('http://localhost/imagePlaceHolder')
  expect(image.element.height).toBe('10')
  expect(image.element.width).toBe('10')
})
