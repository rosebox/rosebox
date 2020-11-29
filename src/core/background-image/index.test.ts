import { style } from '../../index'
import { linGrad, per, url } from '../shared'

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

test('backgroundImage: LinearGradient', () => {
  const gradient = linGrad(['red', per(30), ['black', per(20)]])
  console.log(gradient)
  const received = style({
    backgroundImage: gradient,
  })
  const expected = {
    backgroundImage: 'linear-gradient(red, 30%, black 20%)',
  }
  expect(received).toEqual(expected)
})
