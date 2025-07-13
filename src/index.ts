import { createDefu } from 'defu';

export default createDefu((obj, key, value): boolean => {
  if (Array.isArray(obj[key]) && Array.isArray(value)) {
    (obj[key] as unknown[]).push(...(value as unknown[]));
    return true;
  }

  return false;
});
