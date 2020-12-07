import { style } from '../../..'

test('flexWrap: string', () => {
    const received = style({
        flexWrap: 'wrap',
    })
    const expected = {
        flexWrap: 'wrap',
    }
    expect(received).toEqual(expected)
})
