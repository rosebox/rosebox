import { style } from '../../index'
import { styleCSS__ } from '../../integrations/rb-jss'

test('borderImageRepeat: stretch', () => {
    const received = style({
        borderImageRepeat: 'stretch',
    })
    const expected = {
        borderImageRepeat: 'stretch',
    }
    expect(received).toEqual(expected)
})

test('borderImageRepeat: [stretch, space]', () => {
    const received = style({
        borderImageRepeat: ['stretch', 'space'],
    })
    const expected = {
        borderImageRepeat: 'stretch space',
    }
    expect(received).toEqual(expected)
})

test('border-image-repeat: [stretch, space]', () => {
    const received = styleCSS__({
        'border-image-repeat': ['stretch', 'space'],
    })
    const expected = {
        'border-image-repeat': 'stretch space',
    }
    expect(received).toEqual(expected)
})
