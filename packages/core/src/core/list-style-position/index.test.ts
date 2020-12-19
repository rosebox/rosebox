import { style } from '../../index'

test('listStylePosition: keyword', () => {
    const received = style({
        listStylePosition: 'inside',
    })
    const expected = {
        listStylePosition: 'inside',
    }
    expect(received).toEqual(expected)
})
