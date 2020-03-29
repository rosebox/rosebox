import { camelCaseToDash } from '..'

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
