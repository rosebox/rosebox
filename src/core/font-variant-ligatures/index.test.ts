import { style } from '../../index';

test('fontVariantLigatures: keyword', () => {
    const received = style({
        fontVariantLigatures: 'historical-ligatures',
    });
    const expected = {
        fontVariantLigatures: 'historical-ligatures',
    };
    expect(received).toEqual(expected);
});

test('fontVariantLigatures: [keyword, keyword]', () => {
    const received = style({
        fontVariantLigatures: ['historical-ligatures', 'discretionary-ligatures'],
    });
    const expected = {
        fontVariantLigatures: 'historical-ligatures discretionary-ligatures',
    };
    expect(received).toEqual(expected);
});
