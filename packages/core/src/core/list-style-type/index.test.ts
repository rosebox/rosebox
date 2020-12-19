import { style } from '../../index'

test('listStyleType: keyword', () => {
    const received = style({
        listStyleType: 'disc',
    })
    const expected = {
        listStyleType: 'disc',
    }
    expect(received).toEqual(expected)
})
