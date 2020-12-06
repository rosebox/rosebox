import { style } from '../../index';
import { per } from '../shared';
import { pos } from '../shared';

test('backgroundPosition: [per(50), per(50)]', () => {
    const received = style({
        backgroundPosition: pos(per(50), per(50)),
    });
    const expected = {
        backgroundPosition: '50% 50%',
    };
    expect(received).toEqual(expected);
});
