import { style } from '../../index';

test('fontVariantPosition: sub', () => {
    const received = style({
        fontVariantPosition: 'sub',
    });
    const expected = {
        fontVariantPosition: 'sub',
    };
    expect(received).toEqual(expected);
});
