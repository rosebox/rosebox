import { style } from '../../index';

test('fontSizeAdjust: keyword', () => {
    const received = style({
        fontSizeAdjust: 'none',
    });
    const expected = {
        fontSizeAdjust: 'none',
    };
    expect(received).toEqual(expected);
});

test('fontSizeAdjust: number', () => {
    const received = style({
        fontSizeAdjust: 100,
    });
    const expected = {
        fontSizeAdjust: 100,
    };
    expect(received).toEqual(expected);
});
