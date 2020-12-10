import { style } from '../../index'
import { per, px } from '../shared'
import { styleCSS__ } from '../../integrations'

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

test('border-image-width: [Width, Width, Width, Width]', () => {
    const received = styleCSS__({
        'border-image-width': [per(30), 'auto', 'auto', px(30)],
    })
    const expected = {
        'border-image-width': '30% auto auto 30px',
    }
    expect(received).toEqual(expected)
})
