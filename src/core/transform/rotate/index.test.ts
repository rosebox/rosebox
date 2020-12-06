import { rotateX } from './index'
import { style } from '../../../index'
import { deg } from '../../shared'
import { rotateY, rotateZ, rotate, rotate3d } from './rotate'

test('rotateX(Angle<deg>)', () => {
    const received = style({
        transform: rotateX(deg(0)),
    })
    const expected = {
        transform: 'rotateX(0deg)',
    }
    expect(received).toEqual(expected)
})

test('rotateY(Angle<deg>)', () => {
    const received = style({
        transform: rotateY(deg(10)),
    })
    const expected = {
        transform: 'rotateY(10deg)',
    }
    expect(received).toEqual(expected)
})

test('rotateZ(Angle<deg>)', () => {
    const received = style({
        transform: rotateZ(deg(-100)),
    })
    const expected = {
        transform: 'rotateZ(-100deg)',
    }
    expect(received).toEqual(expected)
})

test('rotateZ(Angle<deg>)', () => {
    const received = style({
        transform: rotateZ(deg(-100)),
    })
    const expected = {
        transform: 'rotateZ(-100deg)',
    }
    expect(received).toEqual(expected)
})

test('rotate(Angle<deg>)', () => {
    const received = style({
        transform: rotate(deg(-100)),
    })
    const expected = {
        transform: 'rotate(-100deg)',
    }
    expect(received).toEqual(expected)
})

test('rotate3d(Angle<deg>)', () => {
    const received = style({
        transform: rotate3d(1, 1, 1, deg(-100)),
    })
    const expected = {
        transform: 'rotate3d(1, 1, 1, -100deg)',
    }
    expect(received).toEqual(expected)
})
