import { style } from '../../index'
import { styleCSS__ } from '../../integrations'
import { px } from '../shared'

test('borderCollapse: Length', () => {
    const received = style({
        borderSpacing: px(30),
    })
    const expected = {
        borderSpacing: '30px',
    }
    expect(received).toEqual(expected)
})

test('border-spacing: Length', () => {
    const received = styleCSS__({
        'border-spacing': px(30),
    })
    const expected = {
        'border-spacing': '30px',
    }
    expect(received).toEqual(expected)
})
