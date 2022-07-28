import get from 'lodash/get';

import { Viewport } from '../types';
import { desktop } from '../theme/config';

const isClient = (): boolean => Boolean(window && document);

const getWidth = (): number => get(document, 'documentElement.clientWidth', window.innerWidth);
const getHeight = (): number => get(document, 'documentElement.clientHeight', window.innerHeight);

const getViewportSize = (): Viewport =>
  isClient() ? { width: getWidth(), height: getHeight() } : desktop;

export default getViewportSize;
