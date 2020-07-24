import { RBStyle, style } from '../..'
import { per, px, rem } from '../shared'

const styleObj: RBStyle = {
  top: px(3),
  right: px(3),
  bottom: per(10),
  left: rem(5),
}

test('box offsets', () => {
  const received = style(styleObj)
  const expected = {
    top: '3px',
    right: '3px',
    bottom: '10%',
    left: '5rem',
  }
  expect(received).toEqual(expected)
})
