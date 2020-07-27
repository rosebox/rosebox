import { style } from '../../index'
import { px } from '../shared'

test('maxHeight: Length', () => {
  const received = style({
    maxHeight: px(40),
  })
  const expected = {
    maxHeight: '40px',
  }
  expect(received).toEqual(expected)
})
