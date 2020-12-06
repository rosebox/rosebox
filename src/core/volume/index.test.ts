import { per } from '../shared';
import { style } from '../..';

test('volume: Percentage', () => {
    const received = style({
        volume: per(100),
    });
    const expected = {
        volume: '100%',
    };
    expect(received).toEqual(expected);
});
