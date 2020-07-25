import { style } from '../../index'

test('justifyContent: keyword', () => {
  const received = style({
    justifyContent: 'flex-end',
  })
  const expected = {
    justifyContent: 'flex-end',
  }
  expect(received).toEqual(expected)
})
