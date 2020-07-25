import { style } from '../..'

test('cursor', () => {
  const received = style({
    display: ['flex', 'block'],
  })
  const expected = {
    display: 'flex block',
  }
  expect(received).toEqual(expected)
})
