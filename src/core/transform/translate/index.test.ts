import { style } from '../../../index'
import { translateX, translateY, translateZ, translate, translate3d } from './translate'
import { px, per } from '../../shared'

test('translateX()', () => {
    const received = style({
        transform: translateX(px(30)),
    })
    const expected = {
        transform: 'translateX(30px)',
    }
    expect(received).toEqual(expected)
})

test('translateY()', () => {
    const received = style({
        transform: translateY(per(30)),
    })
    const expected = {
        transform: 'translateY(30%)',
    }
    expect(received).toEqual(expected)
})

test('translateZ()', () => {
    const received = style({
        transform: translateZ(per(30)),
    })
    const expected = {
        transform: 'translateZ(30%)',
    }
    expect(received).toEqual(expected)
})

test('translate()', () => {
    const received = style({
        transform: translate(per(30), px(30)),
    })
    const expected = {
        transform: 'translate(30%, 30px)',
    }
    expect(received).toEqual(expected)
})

test('translate3d()', () => {
    const received = style({
        transform: translate3d(per(30), px(30), px(100)),
    })
    const expected = {
        transform: 'translate3d(30%, 30px, 100px)',
    }
    expect(received).toEqual(expected)
})
