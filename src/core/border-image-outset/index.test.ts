import { style } from '../../index'
import { px } from '../shared'

test('borderImageOutset: number', () => {
    const received = style({
        borderImageOutset: 3,
    })
    const expected = {
        borderImageOutset: '3',
    }
    expect(received).toEqual(expected)
})

test('borderImageOutset: [number, Percentage]', () => {
    const received = style({
        borderImageOutset: [3, px(80)],
    })
    const expected = {
        borderImageOutset: '3 80px',
    }
    expect(received).toEqual(expected)
})

