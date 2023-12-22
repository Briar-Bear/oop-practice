import { expect, test } from '@jest/globals'
import $e from '../lib/main.js'
import { SuperDisplay } from '../lib/SuperDisplay.js'

test('creating an instance of SuperDisplay', () => {
  const display = $e('display')
  expect(display.constructor).toBe(SuperDisplay)
})

// testing the direction arguement

test('content should be a column ', () => {
  const content = $e('display', { direction: 'column' })

  expect(content.element.style.flexDirection).toBe('column')
})

// testing the position arguement

test('position should call for centerBoth', () => {
  const content = $e('display', { position: 'centerBoth' })

  expect(content.element.style.display).toBe('flex')
  expect(content.element.style.alignItems).toBe('center')
  expect(content.element.style.justifyContent).toBe('center')
})

// testing the alignment

// center

test('content should align to center', () => {
  const content = $e('display')
  content.alignment('centerBoth')

  expect(content.element.style.display).toBe('flex')
  expect(content.element.style.alignItems).toBe('center')
  expect(content.element.style.justifyContent).toBe('center')
})

// center right

test('content should align to center-right', () => {
  const content = $e('display')
  content.alignment('centerRight')

  expect(content.element.style.display).toBe('flex')
  expect(content.element.style.alignItems).toBe('center')
  expect(content.element.style.justifyContent).toBe('flex-end')
})

// center left

test('content should align to center-left', () => {
  const content = $e('display')
  content.alignment('centerLeft')

  expect(content.element.style.display).toBe('flex')
  expect(content.element.style.alignItems).toBe('center')
  expect(content.element.style.justifyContent).toBe('flex-start')
})

// top

test('content should align to the top', () => {
  const content = $e('display')
  content.alignment('top')

  expect(content.element.style.display).toBe('flex')
  expect(content.element.style.alignItems).toBe('flex-start')
})

// top center
test('content should align to top-center', () => {
  const content = $e('display')
  content.alignment('topCenter')

  expect(content.element.style.display).toBe('flex')
  expect(content.element.style.alignItems).toBe('flex-start')
  expect(content.element.style.justifyContent).toBe('center')
})

// top right

test('content should align to top-right', () => {
  const content = $e('display')
  content.alignment('topRight')

  expect(content.element.style.display).toBe('flex')
  expect(content.element.style.alignItems).toBe('flex-start')
  expect(content.element.style.justifyContent).toBe('flex-end')
})

// top left

test('content should align to top-left', () => {
  const content = $e('display')
  content.alignment('topLeft')

  expect(content.element.style.display).toBe('flex')
  expect(content.element.style.alignItems).toBe('flex-start')
  expect(content.element.style.justifyContent).toBe('flex-start')
})

// bottom

test('content should align to bottom', () => {
  const content = $e('display')
  content.alignment('bottom')

  expect(content.element.style.display).toBe('flex')
  expect(content.element.style.alignItems).toBe('flex-end')
})

// bottom center
test('content should align to bottom-center', () => {
  const content = $e('display')
  content.alignment('bottomCenter')

  expect(content.element.style.display).toBe('flex')
  expect(content.element.style.alignItems).toBe('flex-end')
  expect(content.element.style.justifyContent).toBe('center')
})

// bottom right
test('content should align to bottom-right', () => {
  const content = $e('display')
  content.alignment('bottomRight')

  expect(content.element.style.display).toBe('flex')
  expect(content.element.style.alignItems).toBe('flex-end')
  expect(content.element.style.justifyContent).toBe('flex-end')
})

// bottom left
test('content should align to bottom-left', () => {
  const content = $e('display')
  content.alignment('bottomLeft')

  expect(content.element.style.display).toBe('flex')
  expect(content.element.style.alignItems).toBe('flex-end')
  expect(content.element.style.justifyContent).toBe('flex-start')
})
