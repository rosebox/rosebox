import { RBStyle, style } from '../..'
import { px } from '../shared'

const styleObj: RBStyle = {
  borderTopWidth: px(10),
  borderRightWidth: px(100),
  borderBottomWidth: px(1),
  borderLeftWidth: px(2),
  borderWidth: px(100),
}

test('borderRadius', () => {
  const received = style(styleObj)
  const expected = {
    borderTopWidth: '10px',
    borderRightWidth: '100px',
    borderBottomWidth: '1px',
    borderLeftWidth: '2px',
    borderWidth: '100px',
  }
  expect(received).toEqual(expected)
})
