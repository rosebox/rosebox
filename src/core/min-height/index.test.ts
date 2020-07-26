import { style } from '../../index'
import { px } from '../shared'

test('minHeight: Length', () => {
  const received = style({
    minHeight: px(40),
  })
  const expected = {
    minHeight: '40px',
  }
  expect(received).toEqual(expected)
})
