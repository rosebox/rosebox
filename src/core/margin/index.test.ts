import { style } from '../../index'
import { px } from '../shared'

test('margin: [Length, Length, Length, Length]', () => {
  const received = style({
    margin: [px(40), px(40), px(40), px(40)],
  })
  const expected = {
    margin: '40px 40px 40px 40px',
  }
  expect(received).toEqual(expected)
})
