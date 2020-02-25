import { flexWrap } from '../flex-wrap'

test('flexWrap(wrap)', () => {
  const received = flexWrap('wrap')
  const expected = { flexWrap: 'wrap' }
  expect(received).toEqual(expected)
})

test('flexWrap(nowrap)', () => {
  const received = flexWrap('nowrap')
  const expected = { flexWrap: 'nowrap' }
  expect(received).toEqual(expected)
})
