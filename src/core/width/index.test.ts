import { style } from '../..'
import { div, multi, per } from '../shared'

test('width', () => {
  const received = style({
    width: per(3),
  })
  const expected = {
    width: '3%',
  }
  expect(received).toEqual(expected)
})

test('width', () => {
  const received = style({
    width: multi(div(per(100), 7), 3),
  })
  const expected = {
    width: 'calc((100% / 7) * 3)',
  }
  expect(received).toEqual(expected)
})
