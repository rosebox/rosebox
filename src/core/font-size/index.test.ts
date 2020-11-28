import { style } from '../..'
import { csub, px, rem, vw } from '../shared'

test('fontSize: Length<rem>', () => {
  const received = style({
    fontSize: rem(2),
  })
  const expected = {
    fontSize: '2rem',
  }
  expect(received).toEqual(expected)
})

test('fontSize: WidthCalculation', () => {
  const received = style({
    fontSize: csub(vw(10), px(200)),
  })
  const expected = {
    fontSize: 'calc(10vw - 200px)',
  }
  expect(received).toEqual(expected)
})
