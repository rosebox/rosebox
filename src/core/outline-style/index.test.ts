import { style } from '../..'

test('outlineStyle', () => {
  const received = style({
    outlineStyle :'dotted'
  })
  const expected = {
    outlineStyle: 'dotted',
  }
  expect(received).toEqual(expected)
})
