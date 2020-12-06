import { style } from '../..';
import { cdiv, cmult, per } from '../shared';

test('width', () => {
    const received = style({
        width: per(3),
    });
    const expected = {
        width: '3%',
    };
    expect(received).toEqual(expected);
});

test('width: Calculation', () => {
    const received = style({
        width: cmult(cdiv(per(100), 7), 3),
    });
    const expected = {
        width: 'calc(calc(100% / 7) * 3)',
    };
    expect(received).toEqual(expected);
});
