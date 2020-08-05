import { serializeWidthCalculation, subs, add, multi, div } from './calc'
import { px, vw } from './length'
import { per } from './percentage'

test('subs()', () => {
  const value = subs(vw(100), px(10))
  const recieved = serializeWidthCalculation(value)
  const expected = 'calc(100vw - 10px)'
  expect(recieved).toEqual(expected)
})

test('add()', () => {
  const value = add(vw(100), px(10))
  const recieved = serializeWidthCalculation(value)
  const expected = 'calc(100vw + 10px)'
  expect(recieved).toEqual(expected)
})

test('multi()', () => {
  const value = multi(per(100), 3)
  const recieved = serializeWidthCalculation(value)
  const expected = 'calc(100% * 3)'
  expect(recieved).toEqual(expected)
})

test('div()', () => {
  const value = div(per(100), 3)
  const recieved = serializeWidthCalculation(value)
  const expected = 'calc(100% / 3)'
  expect(recieved).toEqual(expected)
})

test('multi(div)', () => {
  const value = multi(div(per(100), 7), 3)
  const recieved = serializeWidthCalculation(value)
  const expected = 'calc((100% / 7) * 3)'
  expect(recieved).toEqual(expected)
})
