import { ms } from '../shared';
import { style } from '../..';

test('animationDelay', () => {
    const received = style({
        animationDelay: [ms(500), ms(1000)],
    });
    const expected = {
        animationDelay: '500ms, 1000ms',
    };
    expect(received).toEqual(expected);
});
