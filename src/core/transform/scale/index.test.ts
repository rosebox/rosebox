import { style } from '../../../index'
import { scaleX, scaleY, scaleZ, scale, scale3d } from './scale'

test('scaleX()', () => {
  const received = style({
    transform: scaleX(0),
  })
  const expected = {
    transform: 'scaleX(0)',
  }
  expect(received).toEqual(expected)
})

test('scaleY()', () => {
  const received = style({
    transform: scaleY(1),
  })
  const expected = {
    transform: 'scaleY(1)',
  }
  expect(received).toEqual(expected)
})

test('scaleZ()', () => {
  const received = style({
    transform: scaleZ(1),
  })
  const expected = {
    transform: 'scaleZ(1)',
  }
  expect(received).toEqual(expected)
})

test('scale(x)', () => {
  const received = style({
    transform: scale(1),
  })
  const expected = {
    transform: 'scale(1)',
  }
  expect(received).toEqual(expected)
})

test('scale(x, y)', () => {
  const received = style({
    transform: scale(1, 2),
  })
  const expected = {
    transform: 'scale(1, 2)',
  }
  expect(received).toEqual(expected)
})

test('scale3d(x, y, z)', () => {
  const received = style({
    transform: scale3d(1, 2, 3),
  })
  const expected = {
    transform: 'scale3d(1, 2, 3)',
  }
  expect(received).toEqual(expected)
})
