import { style } from '../../..';

test('order: number', () => {
    const received = style({
        order: 19,
    });
    const expected = {
        order: 19,
    };
    expect(received).toEqual(expected);
});
