import { style } from '../../index'
import { per, px, rem } from '../shared'

test('padding', () => {
  const received = style({
    paddingTop: px(40),
    paddingRight: px(10),
    paddingBottom: px(10),
    paddingLeft: px(10),
    padding: [px(3), rem(3), per(20), per(20)],
  })
  const expected = {
    paddingTop: '40px',
    paddingRight: '10px',
    paddingBottom: '10px',
    paddingLeft: '10px',
    padding: '3px 3rem 20% 20%',
  }
  expect(received).toEqual(expected)
})
