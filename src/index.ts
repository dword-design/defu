import { createDefu } from 'defu';

export default createDefu((obj, key, value): boolean => {
  if (Array.isArray(obj[key]) && Array.isArray(value)) {
    obj[key].push(...(value as unknown[])); // TODO: Type cast shouldn't be necessary
    return true;
  }

  return false;
});
