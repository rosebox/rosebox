import { style } from '../../index';

test('textUnderlinePosition: [Keyword, Keyword]', () => {
    const received = style({
        textUnderlinePosition: ['from-font', 'left'],
    });
    const expected = {
        textUnderlinePosition: 'from-font left',
    };
    expect(received).toEqual(expected);
});
