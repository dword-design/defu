import { createDefu as createDefuFromDefu } from 'defu';

const arrayMerger = <T, K extends keyof T>(
  object: T,
  key: keyof T,
  value: T[K],
) => {
  if (Array.isArray(object[key]) && Array.isArray(value)) {
    object[key].push(...(value as unknown[])); // TODO: Type cast shouldn't be necessary
    return true;
  }

  return false;
};

type Merger = Parameters<typeof createDefuFromDefu>[0];

export default createDefuFromDefu(arrayMerger);

export const createDefu = (merger: Merger) =>
  createDefuFromDefu((object, key, value, namespace) => {
    if (merger?.(object, key, value, namespace)) {
      return true;
    }

    return arrayMerger(object, key, value);
  });
