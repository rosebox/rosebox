import { style } from '../../..'

test('flexGrow: number', () => {
  const received = style({
    flexGrow: 0,
  })
  const expected = {
    flexGrow: 0,
  }
  expect(received).toEqual(expected)
})
