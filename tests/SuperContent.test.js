import { expect, test } from '@jest/globals'
import $e from '../lib/main.js'
import { SuperContent } from '../lib/SuperContent.js'

test('creating an instance of SuperContent', () => {
  const content = $e('content')
  expect(content.constructor).toBe(SuperContent)
})
