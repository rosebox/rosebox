import { position } from '../index'

test('position(static)', () => {
  const received = position('static')
  const expected = { position: 'static' }
  expect(received).toEqual(expected)
})

test('position(absolute)', () => {
  const received = position('absolute')
  const expected = { position: 'absolute' }
  expect(received).toEqual(expected)
})

test('position(fixed)', () => {
  const received = position('fixed')
  const expected = { position: 'fixed' }
  expect(received).toEqual(expected)
})

test('position(relative)', () => {
  const received = position('relative')
  const expected = { position: 'relative' }
  expect(received).toEqual(expected)
})

test('position(sticky)', () => {
  const received = position('sticky')
  const expected = { position: 'sticky' }
  expect(received).toEqual(expected)
})

test('position(inherit)', () => {
  const received = position('inherit')
  const expected = { position: 'inherit' }
  expect(received).toEqual(expected)
})
