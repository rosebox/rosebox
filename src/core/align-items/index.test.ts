import { style } from '../../index'

test('alignItems: center', () => {
  const received = style({
    alignItems: 'flex-end',
  })
  const expected = {
    alignItems: 'flex-end',
  }
  expect(received).toEqual(expected)
})
