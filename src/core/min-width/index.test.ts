import { style } from '../../index'
import { px } from '../shared'

test('minWidth: Length', () => {
  const received = style({
    minWidth: px(40),
  })
  const expected = {
    minWidth: '40px',
  }
  expect(received).toEqual(expected)
})
