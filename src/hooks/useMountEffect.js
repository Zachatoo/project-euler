import { useEffect, useRef } from 'react';

export const useMountEffect = (callback) => {
  const isMountedRef = useRef(false);

  useEffect(() => {
    if (!isMountedRef.current) {
      isMountedRef.current = true;
      callback.call();
    }
  }, [callback]);
}