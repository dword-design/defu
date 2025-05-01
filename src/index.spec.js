import self from './index.js';

export default {
  array: () =>
    expect(self({ plugins: ['local'] }, { plugins: ['inherited'] })).toEqual({
      plugins: ['inherited', 'local'],
    }),
  object: () =>
    expect(self({ a: 2, b: 1 }, { a: 1, c: 1 })).toEqual({ a: 2, b: 1, c: 1 }),
};
