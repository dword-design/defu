import { expect, test } from '@playwright/test';

import self from '.';

test('array', () =>
  expect(self({ plugins: ['local'] }, { plugins: ['inherited'] })).toEqual({
    plugins: ['inherited', 'local'],
  }));

test('object', () =>
  expect(self({ a: 2, b: 1 }, { a: 1, c: 1 })).toEqual({ a: 2, b: 1, c: 1 }));
