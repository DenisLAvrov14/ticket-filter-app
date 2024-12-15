export const saveToLocalStorage = (key: string, value: any) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error("Could not save to localStorage", e);
    }
  };
  
  export const loadFromLocalStorage = (key: string) => {
    try {
      const storedValue = localStorage.getItem(key);
      if (storedValue === null) return null;
      return JSON.parse(storedValue);
    } catch (e) {
      console.error("Could not load from localStorage", e);
      return null;
    }
  };
  