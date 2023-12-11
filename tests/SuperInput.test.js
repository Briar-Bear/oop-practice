import { SuperInput } from '../lib/SuperInput.js'

test('creating an instance of SuperInput', () => {
  const input = new SuperInput()
  expect(input.constructor).toBe(SuperInput)
})
