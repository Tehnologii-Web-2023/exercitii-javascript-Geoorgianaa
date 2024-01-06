import { sumMultiples, isValidDNA, getComplementaryDNA, isItPrime, createMatrix, areWeCovered } from './exercise006';

describe('sumMultiples', () => {
  test('return the sum of numbers which are a multiple of 3 or 5', () => {
    expect(sumMultiples([1, 3, 5])).toBe(8);
    expect(sumMultiples([2, 4, 6])).toBe(6);
    expect(sumMultiples([10, 45, 18])).toBe(43);
  });
  test('return 0 when there are no multiples of 3 or 5', () => {
    expect(sumMultiples([2, 4, 8])).toBe(0);
  });
  test('return 0 for an empty array', () => {
    expect(sumMultiples([])).toBe(0);
  });
  test('Should trow an error if the input array is not provided', () => {
    expect(() => sumMultiples()).toThrow('arr is required');
  });
});
describe('isValidDNA', () => {
  test('returns true if the string contains only C, G, T or A', () => {
    expect(isValidDNA('CGTA')).toBe(true);
    expect(isValidDNA('CGTB')).toBe(false);
  });
  test('returns false for an empty string', () => {
    expect(isValidDNA('')).toBe(false);
  });

  test('should handle lowercase characters', () => {
    expect(isValidDNA('cgtaa')).toBe(true);
    expect(isValidDNA('CGTab')).toBe(false);
  });

  test('should throw an error if the input string is not provided', () => {
    expect(() => isValidDNA()).toThrow('str is required');
  });
});
describe('getComplementaryDNA', () => {
  test('returns a string of the complementary base pairs', () => {
    expect(getComplementaryDNA('ACTG')).toBe('TGAC');
  });
  test('throw an error if the input string is not provided', () => {
    expect(() => getComplementaryDNA()).toThrow('string is required');
  });
  test('should handle invalid characters by returning an empty string', () => {
    expect(getComplementaryDNA('ACGTBX')).toBe('');
  });
});
describe('isItPrime', () => {
  test('returns true if the number is a prime number', () => {
    expect(isItPrime(7)).toBe(true);
    expect(isItPrime(4)).toBe(false);
  });

  test('should throw an error if the input number is not provided', () => {
    expect(() => isItPrime()).toThrow('n is required');
  });
  test('should return false for 1 since it is not a prime number', () => {
    expect(isItPrime(1)).toBe(false);
  });
  test('throw an error if the input is not an integer', () => {
    expect(() => isItPrime(3.14)).toThrow('n must be an integer');
  });
});
describe('createMatrix', () => {
  test('returns an array of n arrays, each filled with n items', () => {
    expect(createMatrix(3, 'foo')).toEqual([
      ['foo', 'foo', 'foo'],
      ['foo', 'foo', 'foo'],
      ['foo', 'foo', 'foo'],
    ]);
    expect(createMatrix(2, 0)).toEqual([
      [0, 0],
      [0, 0],
    ]);

    expect(createMatrix(4, 'bar')).toEqual([
      ['bar', 'bar', 'bar', 'bar'],
      ['bar', 'bar', 'bar', 'bar'],
      ['bar', 'bar', 'bar', 'bar'],
      ['bar', 'bar', 'bar', 'bar'],
    ]);
  });
  test('should throw an error if the matrix size or fill value is not provided', () => {
    expect(() => createMatrix()).toThrow('n is required');
    expect(() => createMatrix(3)).toThrow('fill is required');
  });
  test('should throw an error if the matrix size is not a positive integer', () => {
    expect(() => createMatrix(0, 'test')).toThrow('n must be a positive integer');
    expect(() => createMatrix(-2, 'test')).toThrow('n must be a positive integer');
  });

  test('should handle fill values of different types', () => {
    expect(createMatrix(2, true)).toEqual([
      [true, true],
      [true, true],
    ]);

    expect(createMatrix(3, { key: 'value' })).toEqual([
      [{ key: 'value' }, { key: 'value' }, { key: 'value' }],
      [{ key: 'value' }, { key: 'value' }, { key: 'value' }],
      [{ key: 'value' }, { key: 'value' }, { key: 'value' }],
    ]);
  });
});
describe('areWeCovered', () => {
  const staff = [
    { name: 'Sally', rota: ['Monday', 'Tuesday', 'Friday'] },
    { name: 'Pedro', rota: ['Saturday', 'Sunday', 'Tuesday', 'Wednesday'] },
  ];

  test('returns true if there are at least 3 staff members scheduled for the given day', () => {
    expect(areWeCovered(staff, 'Tuesday')).toBe(true);
    expect(areWeCovered(staff, 'Monday')).toBe(false);
  });
  test('return false if there are not enough staff members scheduled for the given day', () => {
    expect(areWeCovered(staff, 'Thursday')).toBe(false);
  });

  test('throw an error if the staff or day is not provided', () => {
    expect(() => areWeCovered()).toThrow('staff is required');
    expect(() => areWeCovered(staff)).toThrow('day is required');
  });
});
