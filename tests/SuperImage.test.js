import { expect, test } from '@jest/globals'
import $e from '../lib/main.js'
import { SuperImage } from '../lib/SuperImage.js'

test('creating an instance of SuperImage', () => {
  const image = $e('SuperImage', {})
  expect(image.constructor).toBe(SuperImage)
})
