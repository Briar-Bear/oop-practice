import { expect, test } from '@jest/globals'
import $e from '../lib/main.js'
import { SuperContent } from '../lib/SuperContent.js'

test('creating an instance of SuperContent', () => {
  const content = $e('content')
  expect(content.constructor).toBe(SuperContent)
})

// testing the strike method

test('should strike out content', () => {
  const content = $e('content', { type: 'h1', content: 'Test' })

  content.strike('strike')

  expect(content.element.style.textDecorationLine).toBe('line-through')
})

// to reverse the strike method

test('should unstrike the content', () => {
  const content = $e('content', { type: 'h1', content: 'Test' })

  content.strike('unStrike')

  expect(content.element.style.textDecorationLine).toBe('none')
})

// testing the colour getter and setter

test('if colour has been gotten', () => {
  const content = $e('content', { type: 'h1', content: 'test' })

  content.color = 'blue'

  expect(content.color).toBe('blue')
})
