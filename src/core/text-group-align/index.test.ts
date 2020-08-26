import { style } from '../../index'

test('textGroupAlign: keyword', () => {
  const received = style({
    textGroupAlign: 'end',
  })
  const expected = {
    textGroupAlign: 'end',
  }
  expect(received).toEqual(expected)
})
