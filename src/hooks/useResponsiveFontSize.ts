import { useEffect } from 'react';
import throttle from 'lodash/throttle';

import getViewportSize from '../utils/getViewPortSize';
import { mobileBreakpoint, mobile, desktop, fontSizeMultiplier } from '../theme/config';

const useResponsiveFontSize = () => {
  const setDocumentFontSize = () => {
    const size = getViewportSize();

    const { width, height } = size.width >= mobileBreakpoint.width ? desktop : mobile;

    const scale = {
      width: Math.min(1, size.width / width),
      height: Math.min(1, size.height / height),
    };

    const font = fontSizeMultiplier * scale.width;
    if (Number.isNaN(font) || typeof document === 'undefined') return;
    document.documentElement.style.fontSize = `${font}px`;
  };

  const onResize = throttle(() => {
    setDocumentFontSize();
  }, 100);

  const init = () => {
    window.addEventListener('resize', onResize);
    onResize();
    return () => window.removeEventListener('resize', onResize);
  };

  useEffect(init, []);
};

export default useResponsiveFontSize;
