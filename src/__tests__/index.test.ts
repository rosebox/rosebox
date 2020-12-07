import { style } from '../index'

test('Untyped prop', () => {
    const received = style({
        _zIndex: 'center',
    })
    const expected = {
        _zIndex: 'center',
    }
    expect(received).toEqual(expected)
})
