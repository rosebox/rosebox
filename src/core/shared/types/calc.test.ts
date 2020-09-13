import { serializeWidthCalculation, csubs, cadd, cmulti, cdiv } from './calc'
import { px, vw } from './length'
import { per } from './percentage'

test('csubs()', () => {
  const value = csubs(vw(100), px(10))
  const recieved = serializeWidthCalculation(value)
  const expected = 'calc(100vw - 10px)'
  expect(recieved).toEqual(expected)
})

test('cadd()', () => {
  const value = cadd(vw(100), px(10))
  const recieved = serializeWidthCalculation(value)
  const expected = 'calc(100vw + 10px)'
  expect(recieved).toEqual(expected)
})

test('cmulti()', () => {
  const value = cmulti(per(100), 3)
  const recieved = serializeWidthCalculation(value)
  const expected = 'calc(100% * 3)'
  expect(recieved).toEqual(expected)
})

test('cdiv()', () => {
  const value = cdiv(per(100), 3)
  const recieved = serializeWidthCalculation(value)
  const expected = 'calc(100% / 3)'
  expect(recieved).toEqual(expected)
})

test('cmulti(cdiv)', () => {
  const value = cmulti(cdiv(per(100), 7), 3)
  const recieved = serializeWidthCalculation(value)
  const expected = 'calc((100% / 7) * 3)'
  expect(recieved).toEqual(expected)
})
