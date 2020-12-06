import { style } from '../../index';

test('writingMode: Keyword', () => {
    const received = style({
        writingMode: 'horizontal-tb',
    });
    const expected = {
        writingMode: 'horizontal-tb',
    };
    expect(received).toEqual(expected);
});
