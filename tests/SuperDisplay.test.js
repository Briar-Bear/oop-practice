import { expect, test } from '@jest/globals'
import $e from '../lib/main.js'
import { SuperDisplay } from '../lib/SuperDisplay.js'

test('creating an instance of SuperDisplay', () => {
  const display = $e('display')
  expect(display.constructor).toBe(SuperDisplay)
})

// testing the direction

test('content should be a column ', () => {
  const content = $e('display', { direction: 'column' })
  const button = $e('input', { type: 'button', name: 'test' })

  button.appendTo(content)

  expect(content.element.style.flexDirection).toBe('column')
})

// testing the alignment

test('content should align to center', () => {
  const content = $e('display')
  content.alignment('centerBoth')

  expect(content.element.style.display).toBe('flex')
  expect(content.element.style.justifyContent).toBe('center')
  expect(content.element.style.alignItems).toBe('center')
})
