import { hex } from '../core'
import { style, rgb } from '../index'
import { styleCSS__ } from '../integrations/jss'

test('Untyped prop: Inline', () => {
    const received = style({
        _zIndex: 'center',
        backgroundColor: hex('#000'),
    })
    const expected = {
        zIndex: 'center',
        backgroundColor: '#000',
    }
    expect(received).toEqual(expected)
})

test('Untyped prop: CSS', () => {
    const received = styleCSS__({
        _zIndex: 'center',
        'background-color': rgb(255, 255, 255),
    })
    const expected = {
        'z-index': 'center',
        'background-color': 'rgb(255, 255, 255)',
    }
    expect(received).toEqual(expected)
})
