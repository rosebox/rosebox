import { hex, rgb, s } from '../core'
import { style } from '../index'

test('style', () => {
    const received = style({
        _zIndex: 'center',
        backgroundColor: hex('#000'),
        '&query': {
            '&:nth-child(3)': {
                backgroundColor: 'red',
                color: rgb(255, 255, 255),
                animation: {
                    name: 'test',
                    duration: s(1),
                    delay: s(2),
                    playState: 'paused',
                },
            },
        },
    })
    const expected = {
        zIndex: 'center',
        backgroundColor: '#000',
        '&:nth-child(3)': {
            backgroundColor: 'red',
            color: 'rgb(255, 255, 255)',
            animation: `test 1s ease 2s 1 normal none paused`,
        },
    }
    expect(received).toEqual(expected)
})
