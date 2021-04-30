import { useState, useEffect, useCallback } from 'react';
import { throttle } from '../utilities';

export const useScroll = () => {
  const [scroll, setScroll] = useState({
    y: window.scrollY,
    direction: null,
  });
  
  const _handleDocumentScroll = useCallback(() => {
    setScroll(prev => {
      const y = -window.scrollY;
      let direction;
      if (y < prev.y)
        direction = 'down';
      if (y > prev.y)
        direction = 'up';

      return { y, direction };
    });
  });

  useEffect(() => {
    const _handleDocumentScrollThrottled = throttle(_handleDocumentScroll, 50);

    window.addEventListener('scroll', _handleDocumentScrollThrottled);

    return () => window.removeEventListener('scroll', _handleDocumentScrollThrottled);
  }, [_handleDocumentScroll]);

  return scroll;
}

export default useScroll;