import { style } from '../..';

test('cursor', () => {
    const received = style({
        cursor: 'pointer',
    });
    const expected = {
        cursor: 'pointer',
    };
    expect(received).toEqual(expected);
});
