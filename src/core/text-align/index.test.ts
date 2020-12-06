import { style } from '../../index';

test('textAlign: Keyword', () => {
    const received = style({
        textAlign: 'left',
    });
    const expected = {
        textAlign: 'left',
    };
    expect(received).toEqual(expected);
});
