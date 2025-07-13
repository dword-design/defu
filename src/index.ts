import { createDefu } from 'defu';

export default createDefu((obj, key, value) => {
  if (Array.isArray(obj[key]) && Array.isArray(value)) {
    obj[key].push(...value);
    return true;
  }

  return false;
});
