import { style } from '../../index'
import { styleCSS__ } from '../../integrations/jss'

test('borderCollapse: collapse', () => {
    const received = style({
        borderCollapse: 'collapse',
    })
    const expected = {
        borderCollapse: 'collapse',
    }
    expect(received).toEqual(expected)
})

test('border-collapse: collapse', () => {
    const received = styleCSS__({
        'border-collapse': 'collapse',
    })
    const expected = {
        'border-collapse': 'collapse',
    }
    expect(received).toEqual(expected)
})
