import { lineHeight } from '../index'
import { px, per } from '../../shared/value-constructors'

test('lineHeight(Length<px>)', () => {
  const received = lineHeight(px(30))
  const expected = { lineHeight: '30px' }
  expect(received).toEqual(expected)
})

test('lineHeight(Percentage)', () => {
  const received = lineHeight(per(100))
  const expected = { lineHeight: '100%' }
  expect(received).toEqual(expected)
})

test('lineHeight(normal)', () => {
  const received = lineHeight('normal')
  const expected = { lineHeight: 'normal' }
  expect(received).toEqual(expected)
})
