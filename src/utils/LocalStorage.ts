export const getLocal = <T>(key: string): T => {
  let value: T = JSON.parse(`${localStorage.getItem(key)}`);
  return value;
};
export const setLocal = <T>(key: string, initialValue: T) => {
  localStorage.setItem(key, JSON.stringify(initialValue));
};
