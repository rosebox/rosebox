import { csubs, cadd, cmulti, cdiv } from './calc'
import { env } from './env'
import { px, vw } from './length'
import { per } from './percentage'

test('csubs()', () => {
  const value = csubs(vw(100), px(10))
  const recieved = value.serialize(value)
  const expected = 'calc(100vw - 10px)'
  expect(recieved).toEqual(expected)
})

test('cadd()', () => {
  const value = cadd(vw(100), px(10))
  const recieved = value.serialize(value)
  const expected = 'calc(100vw + 10px)'
  expect(recieved).toEqual(expected)
})

test('cmulti()', () => {
  const value = cmulti(per(100), 3)
  const recieved = value.serialize(value)
  const expected = 'calc(100% * 3)'
  expect(recieved).toEqual(expected)
})

test('cdiv()', () => {
  const value = cdiv(per(100), 3)
  const recieved = value.serialize(value)
  const expected = 'calc(100% / 3)'
  expect(recieved).toEqual(expected)
})

test('cmulti(cdiv)', () => {
  const value = cmulti(cdiv(per(100), 7), 3)
  const recieved = value.serialize(value)
  const expected = 'calc(calc(100% / 7) * 3)'
  expect(recieved).toEqual(expected)
})

test('cmulti(csubs)', () => {
  const value = cmulti(csubs(env('safe-area-inset-bottom'), px(10)), 3)
  const recieved = value.serialize(value)
  const expected = 'calc(calc(env(safe-area-inset-bottom) - 10px) * 3)'
  expect(recieved).toEqual(expected)
})
