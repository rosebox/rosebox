import { style } from '../..'
import { hsl } from '../color'
import { per } from '../shared'

const styleObj = {
  borderColor: hsl(3, per(3), per(3)),
  borderTopColor: hsl(3, per(3), per(3)),
  borderRightColor: hsl(3, per(3), per(3)),
  borderBottomColor: hsl(3, per(3), per(3)),
  borderLeftColor: hsl(3, per(3), per(3)),
}

test('borderColorStyle', () => {
  const received = style(styleObj)
  const expected = {
    borderColor: 'hsl(3, 3%, 3%)',
    borderTopColor: 'hsl(3, 3%, 3%)',
    borderRightColor: 'hsl(3, 3%, 3%)',
    borderBottomColor: 'hsl(3, 3%, 3%)',
    borderLeftColor: 'hsl(3, 3%, 3%)',
  }
  expect(received).toEqual(expected)
})
