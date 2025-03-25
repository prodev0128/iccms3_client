import { useCallback, useRef } from 'react';

import { debounceTime } from '../globals/constants';

/**
 * A custom React hook for debouncing a callback function.
 *
 * @param {Function} callback - The function to debounce.
 * @param {number} delay - The debounce delay in milliseconds.
 * @returns {Function} - A debounced function.
 */
const useDebounceCallback = (callback, delay = debounceTime) => {
  const timeoutRef = useRef(null);

  return useCallback(
    (...args) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay],
  );
};

export default useDebounceCallback;
