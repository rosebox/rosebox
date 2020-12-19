import { style } from '../../index'

test('listStyleType: keyword', () => {
    const received = style({
        listStyle: 'georgian inside',
    })
    const expected = {
        listStyle: 'georgian inside',
    }
    expect(received).toEqual(expected)
})

test('listStyleType: keyword[]', () => {
    const received = style({
        listStyle: ['georgian', 'inside'],
    })
    const expected = {
        listStyle: 'georgian inside',
    }
    expect(received).toEqual(expected)
})
