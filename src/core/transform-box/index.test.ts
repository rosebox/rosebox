import { style } from '../../index'

test('transformBox: fill-box', () => {
  const received = style({
    transformBox: 'fill-box',
  })
  const expected = {
    transformBox: 'fill-box',
  }
  expect(received).toEqual(expected)
})
