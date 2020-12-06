import { per } from '../shared';
import { style } from '../..';

test('verticalAlign: Percentage', () => {
    const received = style({
        verticalAlign: per(100),
    });
    const expected = {
        verticalAlign: '100%',
    };
    expect(received).toEqual(expected);
});
