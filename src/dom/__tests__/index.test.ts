import { camelCaseToDash, createStyleTag } from '..'
import '@testing-library/jest-dom'

test('camelCaseToDash(marginTop)', () => {
  const received = camelCaseToDash('marginTop')
  const expected = 'margin-top'
  expect(received).toEqual(expected)
})

test('camelCaseToDash(borderTopLeftRadius)', () => {
  const received = camelCaseToDash('borderTopLeftRadius')
  const expected = 'border-top-left-radius'
  expect(received).toEqual(expected)
})

test('Test style tag', async () => {
  const container = createStyleTag(
    'rb-gangster',
    { marginTop: '1rem' },
    'before'
  )
  expect(container).toBeInTheDocument()
  expect(container.getAttribute('data-rosebox-id')).toEqual('rb-gangster')
})
