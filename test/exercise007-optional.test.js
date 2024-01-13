import { sumDigits, createRange, getScreentimeAlertList, hexToRGB, findWinner } from '../src/exercise007-optional';
describe('sumDigits Function', () => {
  test('Case 1', () => {
    expect(sumDigits(123)).toBe(6);
  });

  test('Case 2', () => {
    expect(sumDigits(456)).toBe(15);
  });
  test('Case 3 - Negative Number', () => {
    expect(sumDigits(-789)).toBe(24);
  });

  test('Case 4 - Single Digit', () => {
    expect(sumDigits(9)).toBe(9);
  });

  test('Case 5 - Large Number', () => {
    expect(sumDigits(987654321)).toBe(45);
  });
});
describe('createRange Function', () => {
  test('Case 1', () => {
    expect(createRange(3, 11, 2)).toEqual([3, 5, 7, 9, 11]);
  });
  test('Case 2 - Step is 3', () => {
    expect(createRange(0, 10, 3)).toEqual([0, 3, 6, 9]);
  });

  test('Case 3 - Start equals End', () => {
    expect(createRange(7, 7)).toEqual([7]);
  });
});
describe('getScreentimeAlertList Function', () => {
  test('Case 1', () => {
    const users = [
      {
        username: 'beth_1234',
        name: 'Beth Smith',
        screenTime: [
          { date: '2019-05-01', usage: { twitter: 34, instagram: 22, facebook: 40 } },
          { date: '2019-05-02', usage: { twitter: 56, instagram: 40, facebook: 31 } },
          { date: '2019-05-03', usage: { twitter: 12, instagram: 15, facebook: 19 } },
          { date: '2019-05-04', usage: { twitter: 10, instagram: 56, facebook: 61 } },
        ],
      },
    ];
    expect(getScreentimeAlertList(users, '2019-05-04')).toEqual(['beth_1234']);
  });
  test('Case 2 - No Users', () => {
    const users = [];
    expect(getScreentimeAlertList(users, '2019-05-04')).toEqual([]);
  });
  test('Case 3 - Large Usage', () => {
    const users = [
      {
        username: 'john_doe',
        name: 'John Doe',
        screenTime: [{ date: '2020-01-01', usage: { twitter: 150, instagram: 120, facebook: 130 } }],
      },
    ];
    expect(getScreentimeAlertList(users, '2020-01-01')).toEqual(['john_doe']);
  });
});
describe('hexToRGB Function', () => {
  test('Case 1', () => {
    expect(hexToRGB('#FF1133')).toBe('rgb(255,17,51)');
  });

  test('Case 2', () => {
    expect(hexToRGB('#00FF00')).toBe('rgb(0,255,0)');
  });

  test('Case 3 - Lowercase Hex', () => {
    expect(hexToRGB('#aabbcc')).toBe('rgb(170,187,204)');
  });

  test('Case 4 - Short Hex', () => {
    expect(hexToRGB('#123')).toBe('rgb(17,34,51)');
  });

  test('Case 5 - Invalid Hex', () => {
    expect(() => hexToRGB('#GHIJKL')).toThrow('Invalid hexStr');
  });
});
describe('findWinner Function', () => {
  test('Case 1', () => {
    const board = [
      ['X', '0', null],
      ['X', null, '0'],
      ['X', null, '0'],
    ];
    expect(findWinner(board)).toBe('X');
  });

  test('Case 2', () => {
    const board = [
      ['X', null, '0'],
      [null, 'X', '0'],
      ['0', '0', 'X'],
    ];
    expect(findWinner(board)).toBe('X');
  });

  test('Case 3 - No Winner', () => {
    const board = [
      ['X', '0', null],
      [null, 'X', '0'],
      ['X', null, '0'],
    ];
    expect(findWinner(board)).toBe(null);
  });

  test('Case 4 - Diagonal Winner', () => {
    const board = [
      ['X', '0', '0'],
      [null, 'X', '0'],
      ['X', null, 'X'],
    ];
    expect(findWinner(board)).toBe('X');
  });
});
