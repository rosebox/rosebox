import { style } from '../../index';

test('fontVariationSettings: keyword', () => {
    const received = style({
        fontVariationSettings: 'normal',
    });
    const expected = {
        fontVariationSettings: 'normal',
    };
    expect(received).toEqual(expected);
});

test('fontVariationSettings: [string, number]', () => {
    const received = style({
        fontVariationSettings: ['abcde', 30],
    });
    const expected = {
        fontVariationSettings: '"abcde" 30',
    };
    expect(received).toEqual(expected);
});

test('fontVariationSettings: [string, number[]]', () => {
    const received = style({
        fontVariationSettings: [
            ['abcde', 30],
            ['efgh', 20],
        ],
    });
    const expected = {
        fontVariationSettings: '"abcde" 30, "efgh" 20',
    };
    expect(received).toEqual(expected);
});
