import { per } from '../types';

test('Serialize Percentage', () => {
    const received = per(300).serialize();
    const expected = '300%';
    expect(received).toEqual(expected);
});
