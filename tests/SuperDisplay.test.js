import { expect, test } from '@jest/globals'
import $e from '../lib/main.js'
import { SuperDisplay } from '../lib/SuperDisplay.js'

test('creating an instance of SuperDisplay', () => {
  const form = $e('form', {})
  expect(form.constructor).toBe(SuperDisplay)
})
