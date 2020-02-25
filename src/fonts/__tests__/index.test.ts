import { px } from '../../shared/value-constructors'
import { fontSize } from '../font-size'
import { fontWeight } from '../font-weight'

test('fontSize(Length<px>)', () => {
  const received = fontSize(px(2))
  const expected = { fontSize: '2px' }
  expect(received).toEqual(expected)
})

test('fontSize(RelativeSizeKeyword)', () => {
  const received = fontSize('smaller')
  const expected = { fontSize: 'smaller' }
  expect(received).toEqual(expected)
})

test('fontSize(bold)', () => {
  const received = fontWeight('bold')
  const expected = { fontWeight: 'bold' }
  expect(received).toEqual(expected)
})
