import { style } from '../../index'
import { per, px } from '../shared'

test('borderImageSource: Width', () => {
    const received = style({
        borderImageWidth: per(30),
    })
    const expected = {
        borderImageWidth: '30%',
    }
    expect(received).toEqual(expected)
})

test('borderImageSource: [Width, Width, Width, Width]', () => {
    const received = style({
        borderImageWidth: [per(30), 'auto', 'auto', px(30)],
    })
    const expected = {
        borderImageWidth: '30% auto auto 30px',
    }
    expect(received).toEqual(expected)
})
