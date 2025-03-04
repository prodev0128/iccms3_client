import { useEffect, useRef } from 'react';

const useRefMounted = () => {
  const isRef = useRef(true);

  useEffect(
    () => () => {
      isRef.current = false;
    },
    [],
  );

  return isRef;
};

export default useRefMounted;
