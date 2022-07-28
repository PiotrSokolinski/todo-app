import { useEffect, useRef } from 'react';

const useDidUpdateEffect = (callback: (...args: any) => any, dependencies: any[]) => {
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) callback();
    else didMount.current = true;
  }, dependencies);
};

export default useDidUpdateEffect;
