import { darken, hex, hsl, lighten } from '.'
import { RBStyle, style } from '../..'
import { per } from '../shared'

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

test('darken: HSL', () => {
  const baseColor = hsl(100, per(50), per(50))
  const received = style({
    color: darken(baseColor, 0.5),
  })
  const expected = {
    color: 'hsl(100, 50%, 25%)',
  }
  expect(received).toEqual(expected)
})

test('lighten: HSL', () => {
  const baseColor = hsl(100, per(50), per(50))
  const received = style({
    color: lighten(baseColor, 0.5),
  })
  const expected = {
    color: 'hsl(100, 50%, 75%)',
  }
  expect(received).toEqual(expected)
})
