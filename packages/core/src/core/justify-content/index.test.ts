import { style } from '../../index'

test('justifyContent: keyword', () => {
    const received = style({
        justifyContent: 'flex-end',
    })
    const expected = {
        justifyContent: 'flex-end',
    }
    expect(received).toEqual(expected)
})

test('justifyContent: [keyword, keyword]', () => {
    const received = style({
        justifyContent: ['safe', 'flex-end'],
    })
    const expected = {
        justifyContent: 'safe flex-end',
    }
    expect(received).toEqual(expected)
})
