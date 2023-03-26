import {useState, useEffect} from 'react';

export const useFormattedDegrees = (degree: number) => {
  const fixedDegree = Number(degree.toFixed());
  const [formattedDegree, setFormattedDegree] = useState('');
  useEffect(() => {
    if (fixedDegree > 0) {
      setFormattedDegree(`+${fixedDegree}°`);
    }
    if (fixedDegree === -0 || fixedDegree === 0) {
      setFormattedDegree('0°');
    }
    if (fixedDegree < 0) {
      setFormattedDegree(`${fixedDegree} °`);
    }
  }, [fixedDegree]);

  return {
    formattedDegree,
  };
};
