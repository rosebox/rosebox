import {
  textDecorationLine,
  textDecorationColor,
  textDecorationStyle,
  textDecoration
} from '../index'
import { rgb } from '../../color/internal'

test('textDecorationLine(line-through blink overline underline)', () => {
  const received = textDecorationLine('line-through blink overline underline')
  const expected = {
    textDecorationLine: 'line-through blink overline underline'
  }
  expect(received).toEqual(expected)
})

test('textDecorationColor(RGB)', () => {
  const received = textDecorationColor(rgb([255, 255, 255]))
  const expected = {
    textDecorationColor: 'rgb(255, 255, 255)'
  }
  expect(received).toEqual(expected)
})

test('textDecorationStyle(solid)', () => {
  const received = textDecorationStyle('solid')
  const expected = {
    textDecorationStyle: 'solid'
  }
  expect(received).toEqual(expected)
})

test('textDecoration(RGB)', () => {
  const received = textDecoration(rgb([255, 255, 255]))
  const expected = {
    textDecoration: 'rgb(255, 255, 255)'
  }
  expect(received).toEqual(expected)
})

test('textDecoration(solid)', () => {
  const received = textDecoration('solid')
  const expected = {
    textDecoration: 'solid'
  }
  expect(received).toEqual(expected)
})

test('textDecoration([solid])', () => {
  const received = textDecoration(['solid'])
  const expected = {
    textDecoration: 'solid'
  }
  expect(received).toEqual(expected)
})

test('textDecoration([solid, RGB])', () => {
  const received = textDecoration(['solid', rgb([255, 255, 255])])
  const expected = {
    textDecoration: 'solid rgb(255, 255, 255)'
  }
  expect(received).toEqual(expected)
})
