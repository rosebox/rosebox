import { px, s } from '../core';
import { toNum } from '.';

test('toNum<Length>', () => {
    const received = toNum(px(30));
    const expected = 30;
    expect(received).toEqual(expected);
});

test('toNum<Duration>', () => {
    const received = toNum(s(30));
    const expected = 30;
    expect(received).toEqual(expected);
});
