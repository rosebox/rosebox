import { style } from '../../index'
import { px } from '../shared'

test('marginLeft: Length', () => {
  const received = style({
    marginLeft: px(100),
  })
  const expected = {
    marginLeft: '100px',
  }
  expect(received).toEqual(expected)
})
