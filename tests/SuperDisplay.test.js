import { expect, test } from '@jest/globals'
import $e from '../lib/main.js'
import { SuperDisplay } from '../lib/SuperDisplay.js'

test('creating an instance of SuperDisplay', () => {
  const display = $e('display', {})
  expect(display.constructor).toBe(SuperDisplay)
})
