// @flow
import isEmpty from '../isEmpty';

describe('isEmpty', function() {
  test('returns false for null', function() {
    let result = isEmpty(null);
    let expected = false;
    expect(result).toBe(false);
  });

  test('returns false for undefined', function() {
    let result = isEmpty(undefined);
    let expected = false;
    expect(result).toBe(false);
  });

  test('returns true for empty string', function() {
    let emptyString = isEmpty('');
    let emptyStringWithSpace = isEmpty(' ');
    expect(emptyString).toBe(true);
    expect(emptyStringWithSpace).toBe(false);
  });

  test('returns true for empty array', function() {
    let emptyArray = isEmpty([]);
    let emptyArrayWithArray = isEmpty([[]]);
    expect(emptyArray).toEqual(true);
    expect(emptyArrayWithArray).toEqual(false);
  });

  test('returns true for empty object', function() {
    let emptyObject = isEmpty({});
    let emptyObjectWithOneKey = isEmpty({x: 0});
    expect(emptyObject).toEqual(true);
    expect(emptyObjectWithOneKey).toEqual(false);
  });

  test('returns false for every other value', function() {
    expect(isEmpty(0)).toBe(false);
    expect(isEmpty(NaN)).toBe(false);
    expect(isEmpty([''])).toEqual(false);
  });
});
