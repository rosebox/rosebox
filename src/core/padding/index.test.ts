import { style } from '../../index'
import { cdiv, cmult, per, px, vw } from '../shared'

test('paddingX: LengthPercentage', () => {
    const received = style({
        paddingX: px(15),
    })
    const expected = {
        paddingLeft: '15px',
        paddingRight: '15px',
    }
    expect(received).toEqual(expected)
})

test('paddingX: [LengthPercentage, LengthPercentage]', () => {
    const received = style({
        paddingX: [px(15), px(100)],
    })
    const expected = {
        paddingLeft: '15px',
        paddingRight: '100px',
    }
    expect(received).toEqual(expected)
})

test('padding: [LengthPercentage, LengthPercentage, LengthPercentage]', () => {
    const received = style({
        padding: [px(15), px(100), px(100)],
    })
    const expected = {
        padding: '15px 100px 100px',
    }
    expect(received).toEqual(expected)
})

test('padding: PaddingObject', () => {
    const received = style({
        padding: {
            top: px(15),
            bottom: px(100),
        },
    })
    const expected = {
        paddingTop: '15px',
        paddingBottom: '100px',
    }
    expect(received).toEqual(expected)
})

test('paddingX: Calculation', () => {
    const received = style({
        paddingX: cmult(cdiv(per(100), 7), 3),
    })
    const expected = {
        paddingLeft: 'calc(calc(100% / 7) * 3)',
        paddingRight: 'calc(calc(100% / 7) * 3)',
    }
    expect(received).toEqual(expected)
})

test('padding: Calculation', () => {
    const received = style({
        padding: cmult(cdiv(per(100), 7), 3),
    })
    const expected = {
        padding: 'calc(calc(100% / 7) * 3)',
    }
    expect(received).toEqual(expected)
})

test('padding: Calculation', () => {
    const received = style({
        padding: [cmult(per(100), 2), px(50), cdiv(vw(100), 7), px(100)],
    })
    const expected = {
        padding: 'calc(100% * 2) 50px calc(100vw / 7) 100px',
    }
    expect(received).toEqual(expected)
})
