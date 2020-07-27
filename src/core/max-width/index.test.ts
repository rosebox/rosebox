import { style } from '../../index'
import { px } from '../shared'

test('maxWidth: Length', () => {
  const received = style({
    maxWidth: px(40),
  })
  const expected = {
    maxWidth: '40px',
  }
  expect(received).toEqual(expected)
})
