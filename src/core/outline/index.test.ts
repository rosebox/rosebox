import { style } from '../..';
import { px } from '../shared';

test('outline', () => {
    const received = style({
        outline: ['forestgreen', px(3)],
    });
    const expected = {
        outline: 'forestgreen 3px',
    };
    expect(received).toEqual(expected);
});
