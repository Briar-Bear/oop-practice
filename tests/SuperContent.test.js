import { expect, test } from '@jest/globals'
import $e from '../lib/main.js'
import { SuperContent } from '../lib/SuperContent.js'

test('creating an instance of SuperContent', () => {
  const content = $e('content')
  expect(content.constructor).toBe(SuperContent)
})

// testing the strike method - DOESNT WORK

test('should strike out content', () => {
  const content = $e('content', { type: 'h1', content: 'Test' })

  content.strike('strike')

  expect(content.element.style.textDecorationLine).toBe('line-through')
})
