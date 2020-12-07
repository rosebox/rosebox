import { style } from '../../index'
import { s } from '../shared'

test('animation: Animation', () => {
    const received = style({
        animation: {
            name: 'test',
            duration: s(1),
        },
    })
    const expected = {
        animation: `test 1s ease 0s 1 normal none running`,
    }
    expect(received).toEqual(expected)
})

test('animation: Animation', () => {
    const received = style({
        animation: {
            name: 'test',
            duration: s(1),
            delay: s(2),
            playState: 'paused',
        },
    })
    const expected = {
        animation: `test 1s ease 2s 1 normal none paused`,
    }
    expect(received).toEqual(expected)
})

test('animation: Animation[]', () => {
    const received = style({
        animation: [
            {
                name: 'test1',
                duration: s(1),
                delay: s(2),
                playState: 'paused',
            },
            {
                name: 'test2',
                duration: s(3),
                delay: s(2),
                playState: 'running',
            },
        ],
    })
    const expected = {
        animation: `test1 1s ease 2s 1 normal none paused, test2 3s ease 2s 1 normal none running`,
    }
    expect(received).toEqual(expected)
})

test('animation: GobalCSSKeyword', () => {
    const received = style({
        animation: 'initial',
    })
    const expected = {
        animation: `initial`,
    }
    expect(received).toEqual(expected)
})
