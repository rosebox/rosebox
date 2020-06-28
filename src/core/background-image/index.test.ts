import { style } from '../../index'

test('backgroundImage: keyword', () => {
  const received = style({
    backgroundImage: 'none',
  })
  const expected = {
    backgroundImage: 'none',
  }
  expect(received).toEqual(expected)
})
