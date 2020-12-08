import { style } from '../../index'

test('justifySelf: center', () => {
    const received = style({
        justifySelf: 'center',
    })
    const expected = {
        justifySelf: 'center',
    }
    expect(received).toEqual(expected)
})

test('justifySelf: ["safe", "self-end"]', () => {
    const received = style({
        justifySelf: ['safe', 'self-end'],
    })
    const expected = {
        justifySelf: 'safe self-end',
    }
    expect(received).toEqual(expected)
})
