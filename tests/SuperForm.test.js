import { expect, test } from '@jest/globals'
import $e from '../lib/main.js'
import { SuperForm } from '../lib/SuperForm.js'

test('creating an instance of SuperForm', () => {
  const content = $e('SuperForm', {})
  expect(content.constructor).toBe(SuperForm)
})
