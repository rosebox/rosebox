import {
    matrix,
    matrix3d,
    perspective,
    px,
    rotateX,
    rotate,
    deg,
    rotateY,
    rotateZ,
    rotate3d,
    scale,
    scaleX,
    scaleY,
    scaleZ,
    scale3d,
    skewX,
    skewY,
    skew,
    per,
    translate,
    translate3d,
    translateX,
    translateY,
    translateZ,
} from '../shared'
import { style } from '../../index'

test('matrix()', () => {
    const received = style({
        transform: matrix(1, 2, 3, 4, 5, 6),
    })
    const expected = {
        transform: 'matrix(1, 2, 3, 4, 5, 6)',
    }
    expect(received).toEqual(expected)
})

test('matrix3d()', () => {
    const received = style({
        transform: matrix3d(1, 0, 0, 0, 0, 1, 3, 0, 0, 0, 1, 0, 50, 100, 0, 1.1),
    })
    const expected = {
        transform: 'matrix3d(1, 0, 0, 0, 0, 1, 3, 0, 0, 0, 1, 0, 50, 100, 0, 1.1)',
    }
    expect(received).toEqual(expected)
})

test('perspective()', () => {
    const received = style({
        transform: perspective(px(30)),
    })
    const expected = {
        transform: 'perspective(30px)',
    }
    expect(received).toEqual(expected)
})

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
        transform: rotateY(deg(0)),
    })
    const expected = {
        transform: 'rotateY(0deg)',
    }
    expect(received).toEqual(expected)
})

test('rotateZ(Angle<deg>)', () => {
    const received = style({
        transform: rotateZ(deg(0)),
    })
    const expected = {
        transform: 'rotateZ(0deg)',
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

test('rotate3d(number, number, number, Angle<deg>)', () => {
    const received = style({
        transform: rotate3d(1, 1, 1, deg(-100)),
    })
    const expected = {
        transform: 'rotate3d(1, 1, 1, -100deg)',
    }
    expect(received).toEqual(expected)
})

test('scaleX()', () => {
    const received = style({
        transform: scaleX(0),
    })
    const expected = {
        transform: 'scaleX(0)',
    }
    expect(received).toEqual(expected)
})

test('scaleY()', () => {
    const received = style({
        transform: scaleY(1),
    })
    const expected = {
        transform: 'scaleY(1)',
    }
    expect(received).toEqual(expected)
})

test('scaleZ()', () => {
    const received = style({
        transform: scaleZ(1),
    })
    const expected = {
        transform: 'scaleZ(1)',
    }
    expect(received).toEqual(expected)
})

test('scale(x)', () => {
    const received = style({
        transform: scale(1),
    })
    const expected = {
        transform: 'scale(1)',
    }
    expect(received).toEqual(expected)
})

test('scale(x, y)', () => {
    const received = style({
        transform: scale(1, 2),
    })
    const expected = {
        transform: 'scale(1, 2)',
    }
    expect(received).toEqual(expected)
})

test('scale3d(x, y, z)', () => {
    const received = style({
        transform: scale3d(1, 2, 3),
    })
    const expected = {
        transform: 'scale3d(1, 2, 3)',
    }
    expect(received).toEqual(expected)
})

test('skewX()', () => {
    const received = style({
        transform: skewX(deg(-10)),
    })
    const expected = {
        transform: 'skewX(-10deg)',
    }
    expect(received).toEqual(expected)
})

test('skewY()', () => {
    const received = style({
        transform: skewY(deg(10)),
    })
    const expected = {
        transform: 'skewY(10deg)',
    }
    expect(received).toEqual(expected)
})

test('skew(Angle)', () => {
    const received = style({
        transform: skew(deg(10)),
    })
    const expected = {
        transform: 'skew(10deg)',
    }
    expect(received).toEqual(expected)
})

test('skew(Angle, Angle)', () => {
    const received = style({
        transform: skew(deg(10), deg(-10)),
    })
    const expected = {
        transform: 'skew(10deg, -10deg)',
    }
    expect(received).toEqual(expected)
})

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

test('translate(x1)', () => {
    const received = style({
        transform: translate(per(30)),
    })
    const expected = {
        transform: 'translate(30%)',
    }
    expect(received).toEqual(expected)
})

test('translate(x1, x2)', () => {
    const received = style({
        transform: translate(per(30), px(30)),
    })
    const expected = {
        transform: 'translate(30%, 30px)',
    }
    expect(received).toEqual(expected)
})

test('translate(x1, x2, x3)', () => {
    const received = style({
        transform: translate(per(30), px(30), px(50)),
    })
    const expected = {
        transform: 'translate(30%, 30px, 50px)',
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
