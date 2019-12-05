/* eslint-disable no-undef */
const deepClone = require('./deepClone');

describe('Deep Clone Test Suite', () => {
  it('should make deep copy of object', () => {
    const object = {
      a: { b: { c: [{ d: 5 }, 8, null], e: 'something' } },
      b: null,
      c: [15, true, { a: 78, b: [45, 78] }],
      d: false,
      e: () => 0,
    };
    const copy = deepClone(object);
    expect(object === copy).toBeFalsy();
    expect(object.a === copy.a).toBeFalsy();
    expect(object).toEqual(copy);
  });
});
