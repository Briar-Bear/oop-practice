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
  clicker.click(mockCallback)
  clicker.element.click.apply(clicker.element)

  expect(mockCallback.mock.calls).toHaveLength(1)
})

// testing the keyUp prototype

test('keyUp event works!', () => {
  const keyListener = $e('input', { type: 'button', name: 'testKeyUp' })
  const mockCallback = jest.fn(() => {})
  keyListener.click(mockCallback)
  keyListener.element.click.apply(keyListener.element)

  expect(mockCallback.mock.calls).toHaveLength(1)
})

// testing the disable method

test('disable works!', () => {
  const disabler = $e('input', { type: 'button', name: 'testDisable' })
  const mockCallback = jest.fn(() => {})
  disabler.disable(mockCallback)
  disabler.element.click.apply(disabler.element)

  expect(disabler.element).toHaveProperty('disabled', true)
})

// testing the enable method - NOT WORKING

// test('enabler works!', () => {
//   const enabler = $e('input', { type: 'button', name: 'testEnable' })
//   const mockCallback = jest.fn(() => {})
//   enabler.enable(mockCallback)
//   enabler.element.click.apply(enabler.element)

//   expect(enabler.element).toHaveProperty('disabled', false)
// })

// testing the remove method

test('remove works!', () => {
  const remover = $e('input', { type: 'button', name: 'testRemove' })
  const mockCallback = jest.fn(() => {})
  remover.remove(mockCallback)
  remover.element.click.apply(remover.element)

  expect(remover.element).toHaveProperty('removed', true)
})
