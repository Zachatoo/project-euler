import { useState } from 'react';
import { useMountEffect } from './useMountEffect';
import { throttle } from '../utilities';

export const useDocumentScrolled = (callback) => {
  const [, setScrollPosition] = useState(0);
  let previousScrollPosition = 0;

  const _handleDocumentScroll = () => {
    const { scrollTop: newScrollPosition } = document.documentElement || document.body;

    setScrollPosition(previousPosition => {
      previousScrollPosition = previousPosition;
      return newScrollPosition;
    });
    callback({ previousScrollPosition, newScrollPosition});
  }

  const _handleDocumentScrollThrottled = throttle(_handleDocumentScroll, 250);

  useMountEffect(() => {
    window.addEventListener('scroll', _handleDocumentScrollThrottled);

    return () => window.removeEventListener('scroll', _handleDocumentScrollThrottled);
  });
}

export default useDocumentScrolled;