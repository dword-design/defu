import { createDefu as createDefuFromDefu } from 'defu';

const arrayMerger = (obj, key, value): boolean => {
  if (Array.isArray(obj[key]) && Array.isArray(value)) {
    obj[key].push(...(value as unknown[])); // TODO: Type cast shouldn't be necessary
    return true;
  }

  return false;
};

export default createDefuFromDefu(arrayMerger);

export const createDefu = merger =>
  createDefuFromDefu((obj, key, value) => {
    if (merger(obj, key, value)) {
      return true;
    }

    return arrayMerger(obj, key, value);
  });
