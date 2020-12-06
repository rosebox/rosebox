import { style } from '../../index';
import { cdiv, cmult, per, px } from '../shared';

test('height: Length', () => {
    const received = style({
        height: px(100),
    });
    const expected = {
        height: '100px',
    };
    expect(received).toEqual(expected);
});

test('height: Calculation', () => {
    const received = style({
        height: cmult(cdiv(per(100), 7), 3),
    });
    const expected = {
        height: 'calc(calc(100% / 7) * 3)',
    };
    expect(received).toEqual(expected);
});
