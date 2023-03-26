import {useState, useEffect} from 'react';

export const useFormattedTime = (time: string) => {
  const [formattedTime, setFormattedTime] = useState('');
  useEffect(() => {
    if (time[0] === '0') {
      setFormattedTime(time.substring(1));
    } else {
      setFormattedTime(time);
    }
  }, [time]);

  return {
    formattedTime,
  };
};
