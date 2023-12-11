import { SuperEvent } from '../lib/SuperEvent.js'

/**
 * @jest-environment jsdom
 */

test('creating an instance of SuperEvent', () => {
  const event = new SuperEvent()
  expect(event.constructor).toBe(SuperEvent)
})

test('click works', () => {
  const event = new SuperEvent()
  const mockClick = event.click()

  return mockClick
})
