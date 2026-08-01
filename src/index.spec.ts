import { expect, test } from '@playwright/test';

import self, { createDefu } from '.';

test.describe('default', () => {
  test('array', () =>
    expect(self({ plugins: ['local'] }, { plugins: ['inherited'] })).toEqual({
      plugins: ['inherited', 'local'],
    }));

  test('object', () =>
    expect(self({ a: 2, b: 1 }, { a: 1, c: 1 })).toEqual({ a: 2, b: 1, c: 1 }));
});

test.describe('createDefu', () => {
  test('merger', () => {
    const defu = createDefu((object, key, value) => {
      object[key] = value;
      return true;
    });

    expect(defu({ a: [2] }, { a: [1] })).toEqual({ a: [2] });
  });

  test('array', () => {
    const defu = createDefu((object, key, value) => {
      if (key === 'foo') {
        object[key] = value;
        return true;
      }

      return false;
    });

    expect(
      defu({ a: ['local'], foo: [1] }, { a: ['inherited'], foo: [2] }),
    ).toEqual({ a: ['inherited', 'local'], foo: [1] });
  });
});
