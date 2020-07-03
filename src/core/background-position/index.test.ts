import { style } from '../../index'
import { per } from '../shared/value-constructors'
import { pos } from '.'

test('backgroundPosition: [center, bottom]', () => {
  const received = style({
    backgroundPosition: pos(per(50), per(50)),
  })
  const expected = {
    backgroundPosition: '50% 50%',
  }
  expect(received).toEqual(expected)
})

test('backgroundPosition: [[left, 60%], [bottom, 30%]]', () => {
  const received = style({
    backgroundPosition: pos(['left', per(60)], ['bottom', per(30)]),
  })
  const expected = {
    backgroundPosition: 'left 60% bottom 30%',
  }
  expect(received).toEqual(expected)
})

test('backgroundPosition: [center, [bottom, 30%]]', () => {
  const received = style({
    backgroundPosition: pos('center', ['bottom', per(30)]),
  })
  const expected = {
    backgroundPosition: 'center bottom 30%',
  }
  expect(received).toEqual(expected)
})

test('backgroundPosition: [pos(50%, 50%), pos(-40%, 30%)', () => {
  const received = style({
    backgroundPosition: [pos(per(50), per(50)), pos(per(-40), per(30))],
  })
  const expected = {
    backgroundPosition: '50% 50%, -40% 30%',
  }
  expect(received).toEqual(expected)
})
