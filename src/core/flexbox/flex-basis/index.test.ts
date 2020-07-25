import { style } from '../../..'

test('flexBasis', () => {
  const received = style({
    flexBasis: 'content',
  })
  const expected = {
    flexBasis: 'content',
  }
  expect(received).toEqual(expected)
})
