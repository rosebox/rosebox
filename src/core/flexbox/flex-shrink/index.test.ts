import { style } from '../../..';

test('flexShrink: number', () => {
    const received = style({
        flexShrink: 0,
    });
    const expected = {
        flexShrink: 0,
    };
    expect(received).toEqual(expected);
});
