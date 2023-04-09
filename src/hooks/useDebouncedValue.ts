import {useState, useEffect} from 'react';

export const useDebouncedValue = (value: string) => {
  const [debouncedValue, setDebouncedValue] = useState('');
  useEffect(() => {
    setTimeout(() => {
      setDebouncedValue(value);
    }, 500);
  }, [value]);
  return {
    debouncedValue,
  };
};
