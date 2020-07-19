import { style } from '../../index'
import { url } from '../shared'

test('backgroundImage: keyword', () => {
  const received = style({
    backgroundImage: 'none',
  })
  const expected = {
    backgroundImage: 'none',
  }
  expect(received).toEqual(expected)
})

test('backgroundImage: URL', () => {
  const received = style({
    backgroundImage: url('/images/image.webp'),
  })
  const expected = {
    backgroundImage: 'url(/images/image.webp)',
  }
  expect(received).toEqual(expected)
})
