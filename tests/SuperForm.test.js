import { expect, test, jest } from '@jest/globals'
import $e from '../lib/main.js'
import { SuperForm } from '../lib/SuperForm.js'

test('creating an instance of SuperForm', () => {
  const content = $e('form')
  expect(content.constructor).toBe(SuperForm)
})

// testing the submit prototype from SuperForm

test('should listen for the submit event.', () => {
  const submitBtn = $e('form', { type: 'button', name: 'testSubmit' })
  const mockCallback = jest.fn(() => {})
  submitBtn.submit(mockCallback)
  submitBtn.element.submit.apply(submitBtn.element)

  expect(mockCallback.mock.calls).toHaveLength(1)
})

// testing the getValue prototype from SuperForm

test('should get the get a value from the textBox.', () => {
  const form = $e('form')
  const textBox = $e('input', { type: 'text', name: 'textTest', options: [['value', 'Hello']] })
  textBox.appendTo(form)
  const valueStore = form.getValue('textTest')

  expect(valueStore).toBe('Hello')
})
