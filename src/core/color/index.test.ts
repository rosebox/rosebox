import { hex } from '.'
import { RBStyle, style } from '../..'

const styleObj: RBStyle = {
  color: hex('#000'),
}

test('color', () => {
  const received = style(styleObj)
  const expected = {
    color: '#000',
  }
  expect(received).toEqual(expected)
})
