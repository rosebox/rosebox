import { maxWidth } from '../index'
import { px, per } from '../../shared/value-constructors'

test('maxWidth(px)', () => {
  const received = maxWidth(px(30))
  const expected = { maxWidth: '30px' }
  expect(received).toEqual(expected)
})

test('maxWidth(%)', () => {
  const received = maxWidth(per(30))
  const expected = { maxWidth: '30%' }
  expect(received).toEqual(expected)
})

test('maxWidth(none)', () => {
  const received = maxWidth('none')
  const expected = { maxWidth: 'none' }
  expect(received).toEqual(expected)
})

test('maxWidth(inherit)', () => {
  const received = maxWidth('inherit')
  const expected = { maxWidth: 'inherit' }
  expect(received).toEqual(expected)
})
