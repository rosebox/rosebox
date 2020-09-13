import { style } from '../../index'
import { rgb } from '../shared'
import { px } from '../shared'

test('border', () => {
  const received = style({
    borderTop: [px(1), 'solid', 'black'],
    borderRight: [px(1), 'solid', 'black'],
    borderBottom: [px(1), 'solid', 'black'],
    borderLeft: [px(1), 'solid', rgb(1, 2, 3)],
  })
  const expected = {
    borderTop: '1px solid black',
    borderRight: '1px solid black',
    borderBottom: '1px solid black',
    borderLeft: '1px solid rgb(1, 2, 3)',
  }
  expect(received).toEqual(expected)
})

test('border', () => {
  const received = style({
    border: 'none',
  })
  const expected = {
    border: 'none',
  }
  expect(received).toEqual(expected)
})
