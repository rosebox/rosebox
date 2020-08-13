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
  const received = style({
    color: darken(hsl(100, per(50), per(50)), 0.5),
  })
  const expected = {
    color: 'hsl(100, 50%, 25%)',
  }
  expect(received).toEqual(expected)
})

test('lighte: HSL', () => {
  const received = style({
    color: lighten(hsl(100, per(50), per(50)), 0.5),
  })
  const expected = {
    color: 'hsl(100, 50%, 75%)',
  }
  expect(received).toEqual(expected)
})
