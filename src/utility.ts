export const getFromStorage = (key: string) => {
  if (typeof window !== "undefined") {
    return window.localStorage.getItem(key);
  }
};

export const setToStorage = (key: string, value: string) => {
  if (typeof window !== "undefined") {
    return window.localStorage.setItem(key, value);
  }
};