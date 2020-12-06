import { style } from '../../index';

test('textJustify: keyword', () => {
    const received = style({
        textJustify: 'inter-character',
    });
    const expected = {
        textJustify: 'inter-character',
    };
    expect(received).toEqual(expected);
});
