import { style } from '../../index'

test('alignContent: ["first", "baseline"]', () => {
  const received = style({
    alignContent: ['first', 'baseline'],
  })
  const expected = {
    alignContent: 'first baseline',
  }
  expect(received).toEqual(expected)
})
