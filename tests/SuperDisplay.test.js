import { expect, test } from '@jest/globals'
import $e from '../lib/main.js'
import { SuperDisplay } from '../lib/SuperDisplay.js'

test('creating an instance of SuperDisplay', () => {
  const display = $e('display')
  expect(display.constructor).toBe(SuperDisplay)
})

// testing the alignment - UNDEFINED

test('should center content', () => {
  const content = $e('display', { position: 'centerBoth', direction: 'column' })
  const button = $e('input', { type: 'button', name: 'test' })

  button.appendTo(content)

  expect(button.element.position).toBe('centerBoth')
})
