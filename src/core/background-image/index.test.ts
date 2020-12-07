import { style } from '../../index'
import { deg, linGrad, per, url } from '../shared'

test('backgroundImage: keyword', () => {
    const received = style({
        backgroundImage: 'none',
    })
    const expected = {
        backgroundImage: 'none',
    }
    expect(received).toEqual(expected)
})

test('backgroundImage: URL', () => {
    const received = style({
        backgroundImage: url('/images/image.webp'),
    })
    const expected = {
        backgroundImage: 'url(/images/image.webp)',
    }
    expect(received).toEqual(expected)
})

test('backgroundImage: LinearGradient', () => {
    const gradient = linGrad({
        colorStopList: ['red', per(30), ['black', per(20)]],
    })
    const received = style({
        backgroundImage: gradient,
    })
    const expected = {
        backgroundImage: 'linear-gradient(red, 30%, black 20%)',
    }
    expect(received).toEqual(expected)
})

test('backgroundImage: LinearGradient', () => {
    const gradient = linGrad({
        direction: 'to left',
        colorStopList: ['red', per(30), ['black', per(20)]],
    })
    const received = style({
        backgroundImage: gradient,
    })
    const expected = {
        backgroundImage: 'linear-gradient(to left, red, 30%, black 20%)',
    }
    expect(received).toEqual(expected)
})

test('backgroundImage: LinearGradient', () => {
    const gradient = linGrad({
        direction: deg(50),
        colorStopList: ['red', per(30), ['black', per(20)]],
    })
    const received = style({
        backgroundImage: gradient,
    })
    const expected = {
        backgroundImage: 'linear-gradient(50deg, red, 30%, black 20%)',
    }
    expect(received).toEqual(expected)
})
