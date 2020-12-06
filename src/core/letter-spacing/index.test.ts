import { style } from '../../index';
import { px } from '../shared';

test('letterSpacing: Length', () => {
    const received = style({
        letterSpacing: px(40),
    });
    const expected = {
        letterSpacing: '40px',
    };
    expect(received).toEqual(expected);
});
