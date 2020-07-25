import { style } from '../../index'
import { px } from '../shared'

test('lineHeight: Length', () => {
  const received = style({
    lineHeight: px(40),
  })
  const expected = {
    lineHeight: '40px',
  }
  expect(received).toEqual(expected)
})
