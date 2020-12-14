import { hex } from '../core'
import { style } from '../index'

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
