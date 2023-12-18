import { expect, test } from '@jest/globals'
import $e from '../lib/main.js'
import { SuperBoxMaker } from '../lib/SuperBoxMaker.js'

test('creating an instance of SuperBoxMaker', () => {
  const box = $e('box')
  expect(box.constructor).toBe(SuperBoxMaker)
})
