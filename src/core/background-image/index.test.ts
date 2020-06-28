import { style } from '../../index'
import { uri } from '../shared/value-constructors'

test('backgroundImage: keyword', () => {
  const received = style({
    backgroundImage: 'none',
  })
  const expected = {
    backgroundImage: 'none',
  }
  expect(received).toEqual(expected)
})

test('backgroundImage: URI', () => {
  const received = style({
    backgroundImage: uri('/images/image.webp'),
  })
  const expected = {
    backgroundImage: '/images/image.webp',
  }
  expect(received).toEqual(expected)
})
