import { style } from '../../index'
import { per } from '../shared'
import { styleCSS__ } from '../../integrations'

test('borderImageSlice: Object', () => {
    const received = style({
        borderImageSlice: {
            offsets: per(50),
        },
    })
    const expected = {
        borderImageSlice: '50%',
    }
    expect(received).toEqual(expected)
})

test('borderImageSlice: Object2', () => {
    const received = style({
        borderImageSlice: {
            offsets: [per(50), 3],
            fill: true,
        },
    })
    const expected = {
        borderImageSlice: '50% 3 fill',
    }
    expect(received).toEqual(expected)
})

test('borderImageSlice: array', () => {
    const received = style({
        borderImageSlice: [per(50), 3, 'fill'],
    })
    const expected = {
        borderImageSlice: '50% 3 fill',
    }
    expect(received).toEqual(expected)
})

test('border-image-slice: array', () => {
    const received = styleCSS__({
        'border-image-slice': [per(50), 3, 'fill'],
    })
    const expected = {
        'border-image-slice': '50% 3 fill',
    }
    expect(received).toEqual(expected)
})
