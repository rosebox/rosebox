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


test('justifyContent: [keyword, keyword]', () => {
  const received = style({
    justifyContent: ['first', 'baseline'],
  })
  const expected = {
    justifyContent: 'first baseline',
  }
  expect(received).toEqual(expected)
})
