import {
  borderTopColor,
  borderRightColor,
  borderBottomColor,
  borderLeftColor,
  borderColor
} from '../index'
import { rgb } from '../../color/internal'

test('borderTopColor(RGB)', () => {
  const received = borderTopColor(rgb([255, 255, 255]))
  const expected = { borderTopColor: 'rgb(255, 255, 255)' }
  expect(received).toEqual(expected)
})

test('borderRightColor(RGB)', () => {
  const received = borderRightColor(rgb([255, 255, 255]))
  const expected = { borderRightColor: 'rgb(255, 255, 255)' }
  expect(received).toEqual(expected)
})

test('borderBottomColor(RGB)', () => {
  const received = borderBottomColor(rgb([255, 255, 255]))
  const expected = { borderBottomColor: 'rgb(255, 255, 255)' }
  expect(received).toEqual(expected)
})

test('borderLeftColor(RGB)', () => {
  const received = borderLeftColor(rgb([255, 255, 255]))
  const expected = { borderLeftColor: 'rgb(255, 255, 255)' }
  expect(received).toEqual(expected)
})

test('borderColor(Color)', () => {
  const received = borderColor(rgb([255, 255, 255]))
  const expected = { borderColor: 'rgb(255, 255, 255)' }
  expect(received).toEqual(expected)
})

test('borderColor([Color])', () => {
  const received = borderColor([rgb([255, 255, 255])])
  const expected = { borderColor: 'rgb(255, 255, 255)' }
  expect(received).toEqual(expected)
})

test('borderColor([Color, Color])', () => {
  const received = borderColor([rgb([255, 255, 255]), rgb([255, 255, 255])])
  const expected = { borderColor: 'rgb(255, 255, 255) rgb(255, 255, 255)' }
  expect(received).toEqual(expected)
})

test('borderColor([Color, Color, Color])', () => {
  const received = borderColor([
    rgb([255, 255, 255]),
    rgb([255, 255, 255]),
    rgb([255, 255, 255])
  ])
  const expected = {
    borderColor: 'rgb(255, 255, 255) rgb(255, 255, 255) rgb(255, 255, 255)'
  }
  expect(received).toEqual(expected)
})

test('borderColor([Color, Color, Color, Color])', () => {
  const received = borderColor([
    rgb([255, 255, 255]),
    rgb([255, 255, 255]),
    rgb([255, 255, 255]),
    rgb([255, 255, 255])
  ])
  const expected = {
    borderColor:
      'rgb(255, 255, 255) rgb(255, 255, 255) rgb(255, 255, 255) rgb(255, 255, 255)'
  }
  expect(received).toEqual(expected)
})
