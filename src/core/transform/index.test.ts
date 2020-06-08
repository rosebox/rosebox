import {
  translateX,
  translateY,
  translateZ,
  translate,
  translate3d
} from './translate'
import { px, per } from '../shared/value-constructors'
import { serializeTransformPropertyValue } from './index'
import { scaleX, scaleY, scale, scale3d } from './scale'
import { rotateX, rotateY, rotateZ, rotate, rotate3d } from './rotate'
import { deg } from '../shared/angle'
import { skewX, skewY, skew } from './skew'
import { matrix, matrix3d } from './matrix'

test('serializeTransformPropertyValue(translateX)', () => {
  const recieved = serializeTransformPropertyValue(translateX(px(30)))
  const expected = 'translateX(30px)'
  expect(recieved).toEqual(expected)
})

test('serializeTransformPropertyValue(translateY)', () => {
  const recieved = serializeTransformPropertyValue(translateY(per(10)))
  const expected = 'translateY(10%)'
  expect(recieved).toEqual(expected)
})

test('serializeTransformPropertyValue(translateZ)', () => {
  const recieved = serializeTransformPropertyValue(translateZ(per(10)))
  const expected = 'translateZ(10%)'
  expect(recieved).toEqual(expected)
})

test('serializeTransformPropertyValue(translate(1arg))', () => {
  const recieved = serializeTransformPropertyValue(translate(per(10)))
  const expected = 'translate(10%)'
  expect(recieved).toEqual(expected)
})

test('serializeTransformPropertyValue(translate(2 args))', () => {
  const recieved = serializeTransformPropertyValue(translate(per(10), per(20)))
  const expected = 'translate(10%, 20%)'
  expect(recieved).toEqual(expected)
})

test('serializeTransformPropertyValue(translate3d)', () => {
  const recieved = serializeTransformPropertyValue(
    translate3d(per(10), per(50), px(20))
  )
  const expected = 'translate3d(10%, 50%, 20px)'
  expect(recieved).toEqual(expected)
})

test('serializeTransformPropertyValue(scaleX)', () => {
  const recieved = serializeTransformPropertyValue(scaleX(10))
  const expected = 'scaleX(10)'
  expect(recieved).toEqual(expected)
})

test('serializeTransformPropertyValue(scaleY)', () => {
  const recieved = serializeTransformPropertyValue(scaleY(10))
  const expected = 'scaleY(10)'
  expect(recieved).toEqual(expected)
})

test('serializeTransformPropertyValue(scale(1 arg))', () => {
  const recieved = serializeTransformPropertyValue(scale(10))
  const expected = 'scale(10)'
  expect(recieved).toEqual(expected)
})

test('serializeTransformPropertyValue(scale(2 args))', () => {
  const recieved = serializeTransformPropertyValue(scale(10, 20))
  const expected = 'scale(10, 20)'
  expect(recieved).toEqual(expected)
})

test('serializeTransformPropertyValue(scale3d)', () => {
  const recieved = serializeTransformPropertyValue(scale3d(10, 20, 30))
  const expected = 'scale3d(10, 20, 30)'
  expect(recieved).toEqual(expected)
})

test('serializeTransformPropertyValue(rotateX)', () => {
  const recieved = serializeTransformPropertyValue(rotateX(deg(10)))
  const expected = 'rotateX(10deg)'
  expect(recieved).toEqual(expected)
})

test('serializeTransformPropertyValue(rotateY)', () => {
  const recieved = serializeTransformPropertyValue(rotateY(deg(10)))
  const expected = 'rotateY(10deg)'
  expect(recieved).toEqual(expected)
})

test('serializeTransformPropertyValue(rotateZ)', () => {
  const recieved = serializeTransformPropertyValue(rotateZ(deg(10)))
  const expected = 'rotateZ(10deg)'
  expect(recieved).toEqual(expected)
})

test('serializeTransformPropertyValue(rotate)', () => {
  const recieved = serializeTransformPropertyValue(rotate(deg(10)))
  const expected = 'rotate(10deg)'
  expect(recieved).toEqual(expected)
})

test('serializeTransformPropertyValue(rotate3d)', () => {
  const recieved = serializeTransformPropertyValue(rotate3d(3, 3, 3, deg(10)))
  const expected = 'rotate3d(3, 3, 3, 10deg)'
  expect(recieved).toEqual(expected)
})

test('serializeTransformPropertyValue(skewX(0))', () => {
  const recieved = serializeTransformPropertyValue(skewX(0))
  const expected = 'skewX(0)'
  expect(recieved).toEqual(expected)
})

test('serializeTransformPropertyValue(skewX(deg(45)))', () => {
  const recieved = serializeTransformPropertyValue(skewX(deg(45)))
  const expected = 'skewX(45deg)'
  expect(recieved).toEqual(expected)
})

test('serializeTransformPropertyValue(skewY(0))', () => {
  const recieved = serializeTransformPropertyValue(skewY(0))
  const expected = 'skewY(0)'
  expect(recieved).toEqual(expected)
})

test('serializeTransformPropertyValue(skewY(deg(90)))', () => {
  const recieved = serializeTransformPropertyValue(skewY(deg(90)))
  const expected = 'skewY(90deg)'
  expect(recieved).toEqual(expected)
})

test('serializeTransformPropertyValue((skew(deg(90)))', () => {
  const recieved = serializeTransformPropertyValue(skew(deg(90)))
  const expected = 'skew(90deg)'
  expect(recieved).toEqual(expected)
})

test('serializeTransformPropertyValue((skew(deg(90), deg(180)))', () => {
  const recieved = serializeTransformPropertyValue(skew(deg(90), deg(180)))
  const expected = 'skew(90deg, 180deg)'
  expect(recieved).toEqual(expected)
})

test('serializeTransformPropertyValue(matrix())', () => {
  const recieved = serializeTransformPropertyValue(matrix(1, 1, 1, 1, 1, 1))
  const expected = 'matrix(1, 1, 1, 1, 1, 1)'
  expect(recieved).toEqual(expected)
})

test('serializeTransformPropertyValue(matrix3d())', () => {
  const recieved = serializeTransformPropertyValue(
    matrix3d(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
  )
  const expected = 'matrix3d(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)'
  expect(recieved).toEqual(expected)
})
