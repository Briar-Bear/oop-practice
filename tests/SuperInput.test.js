import { expect, test, jest } from '@jest/globals'
import $e from '../lib/main.js'
import { SuperInput } from '../lib/SuperInput.js'

test('creating an instance of SuperInput', () => {
  const input = $e('input', {})
  expect(input.constructor).toBe(SuperInput)
})

// testing the click prototype from SuperEvent

test('click event works!', () => {
  const clicker = $e('input', { type: 'button', name: 'testClick' })
  const mockCallback = jest.fn(() => {})
  clicker.click(() => {
    mockCallback()
  })
  expect(mockCallback.mock.calls).toHaveLength(1)
})

elem.onclick.apply(elem)
